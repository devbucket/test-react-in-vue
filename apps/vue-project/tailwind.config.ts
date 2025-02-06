import preset from '@csq/library/tailwind.preset'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './index.html',
    '../../packages/library/src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [preset],
} satisfies Config
