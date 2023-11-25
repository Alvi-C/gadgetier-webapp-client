/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img-1': "https://www.eweek.com/wp-content/uploads/2023/05/top-generative-ai-apps-tools.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}

