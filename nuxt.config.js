export default {
  components: true,
  target: 'static',
  css: [
    '~/assets/css/main.css'
  ],
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  head: {
    titleTemplate: 'WorkAround | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'digital, nomads, nomad, digital nomads, digital nomad, travel, work, WorkAround, around' },
      { name: 'author', content: 'Maurice Gerhardt'},
      { name: 'description', content: 'WorkAround is a community for digital nomads around the world to connect to each other.'},

      { name: 'og:image', content: 'assets/link-preview.png'},
      { name: 'og:image:alt', content: 'WorkAround is a community for digital nomads around the world to connect to each other.'},
      { name: 'og:title', content: '🌏 WorkAround – The digital nomad community'},
      { name: 'og:description', content: 'WorkAround is a community for digital nomads around the world to connect to each other.'},
      { name: 'og:type', content: 'website'},
      { name: 'og:site_name', content: 'WorkAround'},
      { name: 'og:url', content: 'https://www.workaround.world'},

      { name: 'twitter:title', content: '🌏 WorkAround – The digital nomad community'},
      { name: 'twitter:description', content: 'WorkAround is a community for digital nomads around the world to connect each other.'},
      { name: 'twitter:site', content: '@WorkAroundHQ'},
      { name: 'twitter:creator', content: '@mrcgrhrdt'},
      { name: 'twitter:card', content: 'summary'},

      { hid: 'description', name: 'description', content: 'Main' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  }
}