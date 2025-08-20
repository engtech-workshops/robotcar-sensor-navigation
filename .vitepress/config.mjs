import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Robot Car Navigation",
  description: "Workshop for a robot car navigation",
  base: "/robotcar-sensor-navigation/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Overview", link: "/00-overview" },
      // { text: "Intro to Movements", link: "/01-intro-car-movements" },
      // { text: "Setup", link: "/02-hiwonder-setup" },
      // { text: "Manual Control", link: "/03-manual-control" },
      // { text: "Open-Loop Control", link: "/04-open-loop-control" },
      // { text: "Sensor-Based Turning", link: "/05-sensor-based-turning" },
      // { text: "Maze Challenge", link: "/06-maze-challenge" },
      // { text: "Autonomous Driving", link: "/07-autonomous-slam" },
    ],

    sidebar: [
      {
        text: "Workshop",
        collapsible: true,
        items: [
          { text: "Intro to Movements", link: "/01-intro-car-movements" },
          // { text: "Setup", link: "/02-hiwonder-setup" },
          { text: "Manual Control", link: "/03-manual-control" },
          { text: "Open-Loop Control", link: "/04-open-loop-control" },
          { text: "Sensor-Based Turning", link: "/05-sensor-based-turning" },
          { text: "Maze Challenge", link: "/06-maze-challenge" },
          { text: "Autonomous Driving", link: "/07-autonomous-slam" },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/engtech-workshops/robotcar-sensor-navigation' }
    ]
  }
})
