export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      title: 'pycon.jp.2022',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://2022.pycon.jp/',
        },
        { hid: 'og:title', property: 'og:title', content: 'PyCon JP 2022' },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'PyCon JPは、Pythonユーザが集まり、PythonやPythonを使ったソフトウェアについて情報交換、交流をするためのカンファレンスです。',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://2022.pycon.jp/pyconjp2022_ogp.png',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bayon&display=swap',
        },
      ],
    }
  },
  title: 'pycon.jp.2022',
  htmlAttrs: {
    lang: 'ja',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  content: {},

  googleFonts: {
    families: {
      Roboto: true,
      Oswald: true,
      Bayon: [400],
      'Noto Sans JP': [400, 500, 600, 700, 900],
      'Source Sans Pro': [400, 500, 600, 700, 900],
      'Fira Sans': [400, 500, 600, 700, 900],
      Montserrat: [400, 700, 900],
    },
    display: 'swap',
  },

  i18n: {
    vueI18nLoader: true,
    locales: [
      {
        code: 'en',
        iso: 'en',
        file: 'en.json',
      },
      {
        code: 'ja',
        iso: 'ja',
        file: 'ja.json',
      },
    ],
    defaultLocale: 'ja',
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      silentTranslationWarn: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
