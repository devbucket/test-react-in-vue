import type { Config } from "tailwindcss";
import path from "node:path";
import preset from "@csq/library/tailwind.preset";

export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./index.html",
    // path.join(require.resolve("@csq/library"), "**/.js"),
  ],
  presets: [preset],
} satisfies Config;
