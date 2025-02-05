import * as esbuild from 'esbuild'
import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'

/**
 * A plugin that reads a bundle file (e.g. react.js) which contains a named export
 * statement like:
 *    export { SimpleTest, WithContext, WithContextContent, cn, useName }
 *
 * It then creates a new file that:
 *   - Imports all exports as `reactComponents` from the original file.
 *   - Wraps any export whose name begins with an uppercase letter using `myHOC`.
 *   - Re‑exports the wrapped components along with non‑wrapped ones.
 *
 * Options:
 *  - filter: RegExp to select which output file to process (default: /react\.js$/)
 *  - outputSuffix: Suffix to append for the new file (default: ".wrapped.js")
 *  - hOCFunctionName: The name of the HOC function to call (default: "myHOC")
 */
export const reactToVuePlugin = {
  name: 'reactToVue',
  setup(build) {
    build.onEnd(async (result) => {
      console.log('Processing output files...')
      if (!result.outputFiles) {
        console.warn('No output files found. Make sure to run esbuild with `write: false`.')
        return
      }

      // Look through output files for the one we want to process.
      result.outputFiles.forEach((file) => {
        if (!file.path.endsWith('react.js')) {
          return
        }

        const originalContent = file.text
        // Look for a named export statement:
        // e.g. export { SimpleTest, WithContext, WithContextContent, cn, useName }
        const exportRegex = /export\s*{\s*([^}]+)\s*}/
        const match = exportRegex.exec(originalContent)
        if (!match) {
          console.warn(`Could not find a named export in ${file.path}`)
          return
        }

        // Extract and clean the export names.
        const exportsList = match[1]
          .split(',')
          .map((name) => name.trim())
          .filter(Boolean)

        // Decide which exports to wrap.
        // Here we wrap names that start with an uppercase letter.
        const wrappedExports: string[] = []
        const directExports: string[] = []
        for (const name of exportsList) {
          if (/^[A-Z]/.test(name)) {
            wrappedExports.push(name)
          } else {
            directExports.push(name)
          }
        }

        // Determine the import path for the original file.
        // We assume the new file will live in the same directory.
        const dir = path.dirname(file.path)
        const baseName = path.basename(file.path, path.extname(file.path))
        // For example, if file is "react.js", import from "./react"
        const importPath = `./${baseName}`

        // Generate the new file content.
        let newContent = [
          `import { createRoot } from 'react-dom/client'\n`,
          `import { applyPureReactInVue, setVeauryOptions } from 'veaury'\n`,
          `import * as reactComponents from '${importPath}';\n`,
          `\n`,
          `setVeauryOptions({ react: { createRoot } })\n`,
          `\n`,
        ].join('')

        // Wrap the components with HOC.
        for (const name of wrappedExports) {
          newContent += `const ${name} = applyPureReactInVue(reactComponents.${name});\n`
        }

        for (const name of directExports) {
          newContent += `const ${name} = reactComponents.${name};\n`
        }

        // Generate the re-export statement.
        const combinedExports = [...wrappedExports, ...directExports]
        newContent += `\nexport {\n`
        if (combinedExports.length > 0) {
          newContent += `  ${combinedExports.join(', ')}`
          if (directExports.length > 0) {
            newContent += ',\n'
          }
        }
        newContent += `\n};\n`

        // Write the new file to disk.
        const newFilePath = path.join(dir, `vue.js`)
        fs.writeFileSync(newFilePath, newContent, 'utf8')
        console.log(`Wrapped exports file written to: ${newFilePath}`)

        generateDTS(newFilePath, dir)
      })
    })
  },
} satisfies esbuild.Plugin

function generateDTS(sourceFile: string, outDir: string) {
  // Configure the compiler options
  const options: ts.CompilerOptions = {
    declaration: true,
    emitDeclarationOnly: true,
    // if your generated file is plain JS, allowJs is necessary:
    allowJs: true,
    outDir,
    // set module and target to match your project configuration:
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
  }

  // Create a program with the source file
  const program = ts.createProgram([sourceFile], options)
  const emitResult = program.emit()

  // Report any diagnostics
  const diagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics)
  diagnostics.forEach((diagnostic) => {
    if (diagnostic.file && diagnostic.start !== undefined) {
      const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start)
      const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
      console.error(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`)
    } else {
      console.error(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'))
    }
  })
}
