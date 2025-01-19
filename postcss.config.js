module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#FFFFFF',
      },
    },
  },
  plugins: [
    require('tailwindcss/forms'),
  ],
}
