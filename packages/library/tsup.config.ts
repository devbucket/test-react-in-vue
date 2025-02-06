import fs from 'node:fs';
import { defineConfig } from 'tsup'

import { reactToVuePlugin } from './scripts/react-to-vue.plugin'

export default defineConfig((options) => ({
  entry: ['src/react.ts'],
  format: ['esm'],
  splitting: false,
  external: ['react', 'react-dom', 'vue'],
  dts: true,
  clean: true,
  minify: false,
  treeshake: true,
  esbuildPlugins: [reactToVuePlugin],
  async onSuccess() {
    console.log('Copying style.css to dist')
    fs.copyFileSync('./src/style.css', './dist/style.css')
  }
}))
