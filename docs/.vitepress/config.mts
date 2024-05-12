import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Profit-Taker Guide",
  themeConfig: {
    search: {
      provider: 'local'
    },
    sidebarDepth: 4,
    appearance: 'dark',
    nav: [
      { text: 'Beginner', link: '/beginner/welcome' },
      { text: 'Advanced', link: '/advanced/welcome' },
      {
        text: 'Misc',
        items: [
          { text: 'Bugs', link: '/miscellaneous/bugs' },
          { text: 'Resources used', link: '/miscellaneous/resources-used-honorable-mentions.md' },
          { text: 'Calculator', link: 'https://docs.google.com/spreadsheets/d/1jcbUMplWUc0nU-MucVWycNe82CCNhQBsKZElMQb0HnQ' },
          { text: 'Privacy Policy', link: '/miscellaneous/privacy-policy.md' },
        ]
      }
    ],

    sidebar: {
      '/beginner/': [
        {
          text: 'Beginner',
          items: [
            { text: 'Welcome', link: '/beginner/welcome' },
            { text: 'Getting Started', link: '/beginner/starting-out' },
            { text: 'Basic Principles', link: '/beginner/basic-principles' },

            {
              text: 'Basic Builds',
              collapsed: false,
              items: [
                { text: 'Vex Armor Builds', link: '/beginner/vex-armor-builds' },
                { text: 'Eclipse Builds', link: '/beginner/eclipse-builds' },
                { text: 'Other Builds', link: '/beginner/other-builds' },
              ]
            },
            { text: 'Advanced Principles', link: '/beginner/advanced-principles' },
            { text: 'Creating Builds', link: '/beginner/creating-builds' },
          ],
        },
      ],
      '/advanced/': [
        {
          text: 'Advanced',
          items: [
            { text: 'Welcome', link: '/advanced/welcome' },
            { text: 'Speedrun Strats', link: '/advanced/speedrun-strats' },
            { text: 'Solo Speedrun Builds', link: '/advanced/solo-speedrun-builds' },
            { text: 'Squad Speedruns', link: '/advanced/squad-speedruns' },
            { text: 'Riven Guide', link: '/advanced/riven-guide' },
            { text: 'Untapped Potential', link: '/advanced/untapped-potential' },
          ]
        }
      ],
    },
    footer: {
      copyright: 'Copyright © 2024-present Kalaay, ZeyroX, Reuzehagel',
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.profit-taker.com' }
    ],
    outline: [2, 6],
  }
})
