import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "bg-light-1": "#fff",
        "bg-light-2": "#f1f2f4",
        "bg-dark-1": "#2c2a3a",
        "bg-dark-2": "#222130",
        "text-light-1": "#000",
        "text-dark-1": "#fff",
        "primary-light": "#94a3b8",
        "primary-dark": "#5f6a7a",
        "border-light": "#e1e1e1",
        "border-dark": "#565656"
      },
      boxShadow: {
        "1": "2px 2px 8px 3px rgba(0, 0, 0, 0.10)"
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
export default config
