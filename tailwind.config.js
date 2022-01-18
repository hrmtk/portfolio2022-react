module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'media',
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'body': '#090909',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'title': '#E7E5E4',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  plugins: [],
}