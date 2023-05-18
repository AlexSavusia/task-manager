const path = require('path')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Task Management', // Заголовок страницы по умолчанию
    meta: [
      { charset: 'utf-8' }, // Кодировка символов
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }, // Мета-тег для масштабирования на мобильных устройствах
      { hid: 'description', name: 'description', content: 'Task Management Application' }, // Описание приложения
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, // Фавиконка
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      config.resolve.alias['@'] = path.resolve(__dirname)
    },
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
}
