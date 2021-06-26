module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'main-y': '1.5%',
        'main-x': '1.6%',
        'mobile-height': '375px',
      },
      fontFamily: {
        'brand-roman': 'brand-roman',
        'brand-bold': 'brand-bold',
        'brand-medium': 'brand-medium',
        'brand-light': 'brand-light',
        'brand-ultralight': 'brand-ultralight',
      },
      colors: {
        'brand-green': '#ff00b8',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
