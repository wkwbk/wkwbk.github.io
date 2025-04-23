import { defineConfig } from 'vitepress'
import { nav } from './configs'
import { generateSidebar } from 'vitepress-sidebar';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'
import { GitChangelog, GitChangelogMarkdownSection, } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { MermaidMarkdown, MermaidPlugin } from 'vitepress-plugin-mermaid'

const baseUrl = 'https://lisir.me'
const RSS: RSSOptions = {
  title: 'LI SIR',
  baseUrl,
  copyright: 'Copyright (c) 2021-present, LI SIR',
}

export default defineConfig({
  cleanUrls: true,
  lang: 'zh-CN',
  title: "LI SIR - 个人博客",
  titleTemplate: 'Remember me.',
  description: "A VitePress Site",
  lastUpdated: true,

  // Markdown 配置
  markdown: {
    math: true,
    // 行号显示
    lineNumbers: true,
    image: {
      // 开启图片懒加载
      lazyLoading: true,
    },
    config(md) {
      md.use(groupIconMdPlugin) // 代码组图标
      md.use(MermaidMarkdown)
      // 组件插入 h1 标题下
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      }
    }
  },

  vite: {
    plugins: [
      // 代码组图标
      groupIconVitePlugin({
        customIcon: {
          java: 'logos:java',
          js: 'logos:javascript',
          md: 'logos:markdown',
          css: 'logos:css-3',
          bash: 'logos:bash-icon',
          debian: 'logos:debian',
          ubuntu: 'logos:ubuntu',
          centos: 'logos:centos-icon',
          rhel: 'logos:redhat-icon',
          docker: 'vscode-icons:file-type-docker',
          text: 'vscode-icons:file-type-text',
          shell: 'vscode-icons:file-type-shell',
          sh: 'vscode-icons:file-type-shell',
          log: 'vscode-icons:file-type-log',
          输出: 'vscode-icons:file-type-log',
        },
      }),
      RssPlugin(RSS),
      GitChangelog({
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/wkwbk/wkwbk.github.io',
      }),
      GitChangelogMarkdownSection(),
      MermaidPlugin(),
    ],
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ],
      include: ['mermaid'],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        '@nolebase/ui',
        'mermaid'
      ],
    },
  },

  // Fav 图标
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],

  // 站点地图
  sitemap: {
    hostname: 'https://lisir.me',
  },

  // 默认主题配置
  themeConfig: {
    // 左上角 logo
    logo: '/logo.png',

    // 移动端侧边栏文字更改
    sidebarMenuLabel: '目录',

    // 移动端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',

    // 移动端返回顶部文字修改
    returnToTopLabel: '返回顶部',

    // 本地搜索
    search: {
      provider: 'local'
    },

    // Algolia 搜索纯中文版
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: 'AFUXLWG8EE',
    //     apiKey: '4ddb5fd63bdcf6128cfac0b9c5471d83',
    //     indexName: 'doc',
    //     locales: {
    //       root: {
    //         placeholder: '搜索文档',
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //             buttonAriaLabel: '搜索文档'
    //           },
    //           modal: {
    //             searchBox: {
    //               resetButtonTitle: '清除查询条件',
    //               resetButtonAriaLabel: '清除查询条件',
    //               cancelButtonText: '取消',
    //               cancelButtonAriaLabel: '取消'
    //             },
    //             startScreen: {
    //               recentSearchesTitle: '搜索历史',
    //               noRecentSearchesText: '没有搜索历史',
    //               saveRecentSearchButtonTitle: '保存至搜索历史',
    //               removeRecentSearchButtonTitle: '从搜索历史中移除',
    //               favoriteSearchesTitle: '收藏',
    //               removeFavoriteSearchButtonTitle: '从收藏中移除'
    //             },
    //             errorScreen: {
    //               titleText: '无法获取结果',
    //               helpText: '你可能需要检查你的网络连接'
    //             },
    //             footer: {
    //               selectText: '选择',
    //               navigateText: '切换',
    //               closeText: '关闭',
    //               searchByText: '搜索提供者'
    //             },
    //             noResultsScreen: {
    //               noResultsText: '无法找到相关结果',
    //               suggestedQueryText: '你可以尝试查询',
    //               reportMissingResultsText: '你认为该查询应该有结果？',
    //               reportMissingResultsLinkText: '点击反馈'
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // },

    // 页脚
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: `Copyright © 2021-${new Date().getFullYear()} present Evan You`, 
    // },

    // 大纲
    outline: {
      level: [2, 4],
      label: '页面导航'
    },

    // 编辑本页
    editLink: {
      pattern: 'https://github.com/wkwbk/wkwbk.github.io/edit/main/docs/:path',
      text: '在 GitHub 编辑本页'
    },

    // 上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      },
    },

    // 自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 导航栏
    nav,

    // 侧边栏
    sidebar: generateSidebar([
      {
        documentRootPath: '/docs/Notes',
        scanStartPath: 'Lang',
        resolvePath: '/Notes/Lang/',
        collapseDepth: 2,                        // 折叠组 3 级菜单
        sortMenusByName: true,                   // 按名称对菜单项中的项目进行排序
        useTitleFromFileHeading: true,           // 从 h1 标签中获取菜单标题
        useFolderTitleFromIndexFile: true,       // 使用当前文件夹的 index.md 文件中的信息来获取菜单名称
        sortMenusOrderNumericallyFromLink: true, // 如果菜单名称以数字开头，则按数字而不是名称排序
      },
      {
        documentRootPath: '/docs/Notes',
        scanStartPath: 'AI',
        resolvePath: '/Notes/AI/',
        collapseDepth: 2,
        sortMenusByName: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusOrderNumericallyFromLink: true,
      },
      {
        documentRootPath: '/docs/Notes',
        scanStartPath: 'Sys',
        resolvePath: '/Notes/Sys/',
        collapseDepth: 2,
        sortMenusByName: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusOrderNumericallyFromLink: true,
      },
      {
        documentRootPath: '/docs/Notes',
        scanStartPath: 'DB',
        resolvePath: '/Notes/DB/',
        collapseDepth: 2,
        sortMenusByName: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusOrderNumericallyFromLink: true,
      },
      {
        documentRootPath: '/docs/Notes',
        scanStartPath: 'Tool',
        resolvePath: '/Notes/Tool/',
        collapseDepth: 2,
        sortMenusByName: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusOrderNumericallyFromLink: true,
      },
      {
        documentRootPath: '/docs',
        scanStartPath: 'Exam',
        resolvePath: '/Exam/',
        collapseDepth: 2,
        sortMenusByName: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusOrderNumericallyFromLink: true,
        excludePattern: ['思源/'],
      },
      {
        documentRootPath: '/docs/Exam',
        scanStartPath: '思源',
        resolvePath: '/Exam/思源/',
        collapseDepth: 3,
        sortMenusByName: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusOrderNumericallyFromLink: true,
      },
      {
        documentRootPath: '/docs',
        scanStartPath: 'GFW',
        resolvePath: '/GFW/',
        collapseDepth: 2,
        sortMenusByName: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusOrderNumericallyFromLink: true,
      },
      {
        documentRootPath: '/docs',
        scanStartPath: 'DP',
        resolvePath: '/DP/',
        collapseDepth: 2,
        sortMenusByName: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusOrderNumericallyFromLink: true,
      },
      {
        documentRootPath: '/docs',
        scanStartPath: 'Stack',
        resolvePath: '/Stack/',
        collapseDepth: 2,
        sortMenusByName: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusOrderNumericallyFromLink: true,
      },
    ]),

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wkwbk' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/></svg>'
        },
        link: 'https://t.me/lisir_me'
      }
    ]
  }
})
