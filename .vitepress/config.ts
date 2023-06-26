import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Storsalen Utvikling Wiki",
  description: "Wiki for å samle informasjon for utviklere i Storsalen",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Hjem', link: '/' },
      { text: 'Kom i gang', link: '/get-started/' }
    ],

    sidebar: [
      {
        text: 'Kom i gang',
        items: [
          { text: 'Kom i gang', link: '/get-started/' }
        ]
      },
      {
        text: 'Om Storsalen Utvikling',
        items: [
          { text: 'Om Storsalen Utvikling', link: '/about/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://bitbucket.org/storsalen-utvikling/workspace/overview' }
    ]
  }
})
