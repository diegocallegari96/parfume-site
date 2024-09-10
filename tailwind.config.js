/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundimage: {
        'navbar-bg' : "url('/assets/navbar_bg.png')",
      }
    },
  },
  plugins: [],
}

