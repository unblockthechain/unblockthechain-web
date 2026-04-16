import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#7C3AED",
          indigo: "#4F46E5",
          cyan: "#22D3EE",
          navy: "#0B1026",
        },
      },
    },
  },
  plugins: [],
}
export default config
