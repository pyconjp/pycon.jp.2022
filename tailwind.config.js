const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('@/assets/images/hero_bg_img.svg')",
        footer: "url('@/assets/images/footer_bg_img.svg')",
      },
      colors: {
        primary: {
          DEFAULT: '#952bff',
          50: '#f4eaff',
          100: '#ead5ff',
          200: '#d5aaff',
          300: '#bf80ff',
          400: '#aa55ff',
          500: '#952bff',
          600: '#8000ff',
          700: '#6a00d5',
          800: '#5500aa',
          900: '#400080',
        },
        secondary: {
          DEFAULT: '#2bff95',
          50: '#eafff4',
          100: '#d5ffea',
          200: '#aaffd5',
          300: '#80ffbf',
          400: '#55ffaa',
          500: '#2bff95',
          600: '#00ff80',
          700: '#00d56a',
          800: '#00aa55',
          900: '#008040',
        },
        tertiary: {
          DEFAULT: '',
          50: '#FCFCFD',
          100: '#EFEFF1',
          200: '#E4E4E7',
          300: '#CCCBD2',
          400: '#95939F',
          500: '#7B7887',
          600: '#585562',
          700: '#3D3B45',
          800: '#24222B',
          900: '#1A1623',
        },
        'blue-green': '#1097AA',
      },
    },
    fontFamily: {
      noto: ["'Noto Sans JP'", ...defaultTheme.fontFamily.sans],
      source: ["'Source Sans Pro'", 'sans-serif'],
      fira: ["'Fira Sans'", 'sans-serif'],
      bayon: ["'Bayon'", 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
  variants: {
    extend: {},
  },
}
