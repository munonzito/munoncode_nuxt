/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#5C02E4',
        'gradient-end': '#3C01BE',
        'primary-purple': '#7305FF',
        'secondary-purple': '#3C00BD',
        'preuai-green': '#0DFF00',
        'preuai-correct-green': '#08C23C',
        'preuai-red': '#FF0000',
        'preuai-purple': '#A400F6',
      }
    },
  },
  plugins: [],
}

