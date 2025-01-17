/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import MyLayout from './components/MyLayout.vue'
import confetti from "./components/confetti.vue"
import MNavLinks from './components/MNavLinks.vue'
import HomeUnderline from "./components/HomeUnderline.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import './style/index.css'
import 'virtual:group-icons.css' //代码组样式
import { NolebaseEnhancedReadabilitiesMenu, NolebaseEnhancedReadabilitiesScreenMenu } from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";
import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { InjectionKey } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseHighlightTargetedHeading } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

import { useData, useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick, h } from 'vue';

export default {
  extends: DefaultTheme,

  Layout() {
    return h(MyLayout)
  },

  enhanceApp({ app }) {
    // 注册组件
    app.use(NolebaseGitChangelogPlugin)
    app.component('confetti', confetti)
    app.component('MNavLinks', MNavLinks)
    app.component('HomeUnderline', HomeUnderline)
    app.component('ArticleMetadata', ArticleMetadata)
    app.component('NolebaseHighlightTargetedHeading', NolebaseHighlightTargetedHeading)
    app.component('NolebaseEnhancedReadabilitiesMenu', NolebaseEnhancedReadabilitiesMenu)
    app.component('NolebaseEnhancedReadabilitiesScreenMenu', NolebaseEnhancedReadabilitiesScreenMenu)
    app.provide(InjectionKey, {
      layoutSwitch: {
        defaultMode: 1, // 设置布局默认全部展开
      },
      spotlight: {
        defaultToggle: true, // 设置聚光灯默认开启
      },
    } as Options)
  },

  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();

    // giscus配置
    giscusTalk({
      repo: 'wkwbk/wkwbk.github.io', // 仓库
      repoId: 'R_kgDONmmefA', // 仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDONmmefM4ClyiP', // 讨论分类ID
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

    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  }
}