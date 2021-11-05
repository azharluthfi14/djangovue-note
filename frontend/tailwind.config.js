module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        'dark-first': '#121212',
        'dark-second': '#1f1f1f',
        'dark-third': '#2d2d2d'
      }
    },
    container: {
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },

  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
