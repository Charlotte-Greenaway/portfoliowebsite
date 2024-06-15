import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',   // Pages
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Components
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',     // App directory
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}" // NextUI theme
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui()],
}
export default config
