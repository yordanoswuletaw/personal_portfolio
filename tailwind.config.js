/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#5680E3",
        secondary: "#2F80ED",
        variant: "#6366F1",
        dark: "#1A1C22",
        light: "#F5F5F5",
        white: "#FFFFFF",
        black_light: "#5B5B5B"
      },
      fontFamily: {
        roboto: [ 'League Spartan', 'Roboto', 'Inter','sans-serif']
      },
      backgroundImage: {
        'gradient-bg': "url('/gradient-bg.svg')",
        'gradient-navbar': "url('/nav-gradient.svg')",
      }
    },
  },
  plugins: [],
}
