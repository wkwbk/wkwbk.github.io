/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import MNavLinks from './components/MNavLinks.vue'
import HomeUnderline from "./components/HomeUnderline.vue"
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import './style/index.css'
import 'virtual:group-icons.css' //代码组样式

import { h } from 'vue'
import { useData, useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,

  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
  },

  enhanceApp({ app }) {
    // 注册组件
    app.component('MNavLinks', MNavLinks)
    app.component('HomeUnderline', HomeUnderline)
  },

  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();

    // giscus配置
    giscusTalk({
      repo: 'wkwbk/wkwbk.github.io', //仓库
      repoId: 'R_kgDONd7uZQ', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDONd7uZc4ClPm1', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
    },
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  }
}