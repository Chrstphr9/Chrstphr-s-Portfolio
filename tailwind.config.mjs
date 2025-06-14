module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust based on your project structure
    "./public/index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001f'
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'sans-serif'],
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}