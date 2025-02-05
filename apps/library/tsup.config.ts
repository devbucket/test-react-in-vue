import { type Plugin } from 'esbuild'
import { defineConfig } from 'tsup'

import { reactToVuePlugin } from './scripts/react-to-vue.plugin'

export default defineConfig((options) => ({
  entry: ['src/react.ts', 'virtual:vue'],
  format: ['esm'],
  splitting: false,
  external: ['react', 'react-dom', 'vue'],
  dts: true,
  clean: true,
  minify: false,
  treeshake: true,
  esbuildPlugins: [reactToVuePlugin],
}))
