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
          DEFAULT: '#E84118',
          50: '#FEEFEB',
          100: '#FEE3DC',
          200: '#FCCCC0',
          300: '#FDAE9B',
          400: '#F77C5E',
          500: '#E84118',
          600: '#C13310',
          700: '#B32F0F',
          800: '#952509',
          900: '#781E07',
        },
        secondary: {
          DEFAULT: '#E5BC10',
          50: '#FEF9E6',
          100: '#FDF4CE',
          200: '#FFE98C',
          300: '#F7DF7E',
          400: '#F3D34F',
          500: '#E5BC10',
          600: '#CDA80E',
          700: '#A2850B',
          800: '#776103',
          900: '#685503',
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
      },
    },
    fontFamily: {
      noto: ["'Noto Sans JP'", ...defaultTheme.fontFamily.sans],
      source: 'Source Sans Pro',
      fira: 'Fira Sans',
      bayon: ["'Bayon'", 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
  variants: {
    extend: {},
  },
}
