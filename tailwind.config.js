/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      century: ["var(--font-century)"],
      creators: ["var(--font-creators-wavy)"],
      trajanBold: ["var(--font-trajan-bold)"],
      trajanRegular: ["var(--font-trajan-regular)"],
      burgues: ["var(--font-burgues-script)"],
      elMessiri: ["var(--font-el-messiri)"],
      cylburn: ["var(--font-cylburn-script)"],    
    },
    },
  },
  plugins: [],
}