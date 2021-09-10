export default {
  components: true,
  target: 'static',
  css: [
    '~/assets/scss/main.scss'
  ],
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  modules: [
    'nuxt-protected-mailto',
    '@nuxtjs/style-resources'
  ],
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    titleTemplate: 'WorkAround – %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#000000' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'digital, nomads, nomad, digital nomads, digital nomad, travel, work, WorkAround, around' },
      { name: 'author', content: 'Maurice Gerhardt'},

      // Primary Meta Tags
      { name: 'title', content: 'WorkAround – The digital nomad community'},
      { name: 'description', content: 'WorkAround is a community for digital nomads around the world to connect to each other.'},

      // Open Graph / Facebook
      { name: 'og:type', content: 'website'},
      { name: 'og:url', content: 'https://www.workaround.world'},
      { name: 'og:title', content: 'WorkAround – The digital nomad community'},
      { name: 'og:description', content: 'WorkAround is a community for digital nomads around the world to connect to each other.'},
      { name: 'og:image', content: 'assets/meta-img.png'},
      { name: 'og:image:alt', content: 'WorkAround is a community for digital nomads around the world to connect to each other.'},
      { name: 'og:site_name', content: 'WorkAround'},
      
      // Twitter
      { name: 'twitter:card', content: 'summary'},
      { name: 'twitter:url', content: 'https://www.workaround.world'},
      { name: 'twitter:title', content: 'WorkAround – The digital nomad community'},
      { name: 'twitter:description', content: 'WorkAround is a community for digital nomads around the world to connect each other.'},
      { name: 'twitter:image', content: 'assets/meta-img.png'},
      { name: 'twitter:image:alt', content: 'WorkAround is a community for digital nomads around the world to connect to each other.'},
      { name: 'twitter:site', content: '@WorkAroundHQ'},
      { name: 'twitter:creator', content: '@mrcgrhrdt'},
      
      { hid: 'description', name: 'description', content: 'Main' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://api.fontshare.com/css?f[]=satoshi@400,500,700,900&f[]=switzer@400,500,600,700,800,900&display=swap' }
    ],
    script: [
      {
        src: 'https://cukami.workaround.world/umami.js',
        'data-website-id': '19c7ef49-dad0-4129-9448-f9ee75340f66',
        async: true,
        defer: true
      }
    ]
  }
}
