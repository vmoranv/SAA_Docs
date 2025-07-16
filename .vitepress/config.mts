import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 默认语言设置为中文
  title: "SAA 文档",
  description: "SAA 文档站点",
  lang: 'zh-CN',

  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "SAA 文档",
      description: "SAA 文档站点",
      themeConfig: {
        logo : "../assets/logo.png",
        nav: [
          { text: '首页', link: '/' },
          { text: '示例', link: '/markdown-examples' }
        ],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/markdown-examples' },
              { text: '运行时 API 示例', link: '/api-examples' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],

        footer: {
          message: '基于 <a href="https://github.com/vmoranv/SAA_Docs/blob/master/LICENSE">MIT 许可证</a> 发布。',
          copyright: 'Copyright © 2025 SAA Docs'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: "SAA Docs",
      description: "A Doc Site For SAA",
      themeConfig: {
        logo : "../assets/logo.png",
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Examples', link: '/en/markdown-examples' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/en/markdown-examples' },
              { text: 'Runtime API Examples', link: '/en/api-examples' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],

        footer: {
          message: 'Released under the <a href="https://github.com/vmoranv/SAA_Docs/blob/master/LICENSE">MIT License</a>.',
          copyright: 'Copyright © 2025 SAA Docs'
        }
      }
    }
  }
})
