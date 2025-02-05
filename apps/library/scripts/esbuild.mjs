import esbuild from 'esbuild'

const dir = 'dist'

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: ['src/react.ts', 'src/vue.ts'],
  outdir: dir,
  format: 'esm',
  target: 'es2020',
  sourcemap: true,
  minify: process.env.NODE_ENV === 'production',
  bundle: true,
  external: ['react', 'react-dom', 'vue'],
}

// Check if "watch=true" flag is passed
if (process.argv[2]) {
  const [key, value] = process.argv[2].split('=')
  if (key === 'watch' && value === 'true') {
    const ctx = await esbuild.context(options)
    await ctx.watch()
  }
}

esbuild.build(options).catch(() => process.exit(1))
