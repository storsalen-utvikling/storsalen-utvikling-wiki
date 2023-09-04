import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Storsalen Utvikling",
    titleTemplate: "Storsalen Utvikling | :title",
    description: "Wiki for å samle informasjon for utviklere i Storsalen",
    lang: "nb-NO",
    lastUpdated: true,
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "72x72", href: "/storsalen-128x128.png"}],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/storsalen-128x128.png',
        nav: [
            {text: 'Hjem', link: '/'},
            {text: 'Om Oss', link: '/about/'},
        ],
        sidebar: [
            {
                text: 'Om Oss',
                items: [
                    {text: 'Storsalen Utvikling', link: '/about/'},
                ],
            },
            {
                text: 'Oppsett',
                items: [
                    {text: 'Kom i gang', link: '/get-started/'},
                    {text: 'Storsalen Appen', link: '/get-started/storsalen-app.md'},
                ],
            },
            {
                text: 'Verktøy',
                items: [
                    {text: 'TeamCity', link: '/tools/team-city.md'},
                    {text: 'GitHub', link: '/tools/github.md'},
                ],
            },
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/storsalen-utvikling'},
        ],
        lastUpdatedText: 'Sist Oppdatert',
    },
})
