import type { Config } from 'tailwindcss'

import preset from './tailwind.preset'

const { darkMode, ...config } = preset

export default {
  darkMode: ['class'],
  presets: [config],
  content: ['src/**/*.{ts,tsx}'],
} satisfies Config
