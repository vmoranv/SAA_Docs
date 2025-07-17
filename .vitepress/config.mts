import { defineConfig } from 'vitepress'
// import { set_sidebar } from "./utils/auto-gen-sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SAA Docs",
  description: "A Doc Site For SAA",

  // 配置多语言支持
  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "SAA 文档",
      description: "尘白禁区自动化助手文档",
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '开始使用', link: '/zh/getting-started' },
          {
            text: '功能介绍',
            items: [
              { text: '日常活动', link: '/zh/features/daily' },
              { text: '游戏辅助', link: '/zh/features/games' },
              { text: '按键工具', link: '/zh/features/hotkeys' }
            ]
          },
          { text: '示例', link: '/zh/markdown-examples' }
        ],
        // sidebar: set_sidebar("/zh"),
        sidebar:[
          {
            text: '开始使用',
            link: '/zh/getting-started'
          },
          {
            text: '功能介绍',
            items: [
              {
                text: '日常活动',
                link: '/zh/features/daily'
              },
              {
                text: '游戏辅助',
                link: '/zh/features/games'
              },
              {
                text: '按键工具',
                link: '/zh/features/hotkeys'
              }
            ]
          },
          {
            text: 'Markdown 示例',
            link: '/zh/markdown-examples'
          }
        ],
        // 自定义站点标题和图标
        siteTitle: 'SAA 文档',
        logo: '/logo.png',
        // 社交链接
        socialLinks: [
          { icon: 'github', link: 'https://github.com/LaoZhuJackson/SnowbreakAutoAssistant' }
        ],
        // 页脚
        footer: {
          message: '基于 MIT 许可发布',
          copyright: 'Copyright © 2025 SAA Team'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: "SAA Docs",
      description: "Snowbreak Auto Assistant Documentation",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Get Started', link: '/en/getting-started' },
          {
            text: 'Features',
            items: [
              { text: 'Daily Activities', link: '/en/features/daily' },
              { text: 'Game Assistance', link: '/en/features/games' },
              { text: 'Hotkey Tools', link: '/en/features/hotkeys' }
            ]
          },
          { text: 'Examples', link: '/en/markdown-examples' }
        ],
        // sidebar: set_sidebar('/en'),
        sidebar:[
          {
            text: 'Getting Started',
            link: '/en/getting-started'
          },
          {
            text: 'Features',
            items: [
              {
                text: 'Daily Activities',
                link: '/en/features/daily'
              },
              {
                text: 'Game Assistance',
                link: '/en/features/games'
              },
              {
                text: 'Hotkey Tools',
                link: '/en/features/hotkeys'
              }
            ]
          },
          {
            text: 'Markdown Examples',
            link: '/en/markdown-examples'
          }
        ],
        // 自定义站点标题和图标
        siteTitle: 'SAA Docs',
        logo: '/logo.png',
        // 社交链接
        socialLinks: [
          { icon: 'github', link: 'https://github.com/LaoZhuJackson/SnowbreakAutoAssistant' }
        ],
        // 页脚
        footer: {
          message: 'Released under the MIT License',
          copyright: 'Copyright © 2025 SAA Team'
        }
      }
    }
  },

  // 全局主题配置（作为默认值）
  themeConfig: {
    // 语言切换
    langMenuLabel: '切换语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
