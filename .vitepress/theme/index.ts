// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { StagewiseToolbar } from '@stagewise/toolbar-vue'
import VuePlugin from '@stagewise-plugins/vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-after': () => h(StagewiseToolbar, {
        config: { plugins: [VuePlugin] }
      })
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
