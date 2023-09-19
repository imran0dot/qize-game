/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#A2CD4A",
        "secondary": "#F89A31",
        "primary-bg": "#3B82F6"

      },
      boxShadow: {
        "green": "0 15px 0px 0px #6FAD4E",
        "red": "0 15px 0px 0px #DC4832"
      }
    },
  },
  plugins: [],
}