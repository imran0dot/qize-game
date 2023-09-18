/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "solid": "0 15px 0px 0px #6FAD4E"
      }
    },
  },
  plugins: [],
}