import { defineConfig } from 'vitepress'
import { nav } from './configs'
import { generateSidebar } from 'vitepress-sidebar';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'

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
      md.use(groupIconMdPlugin) //代码组图标
    },
  },

  vite: {
    plugins: [
      groupIconVitePlugin(), //代码组图标
      RssPlugin(RSS)
    ],
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
        documentRootPath: '/docs',
        scanStartPath: '思源',
        resolvePath: '/思源/',
        useTitleFromFileHeading: true, // 从 h1 标签中获取菜单标题
        collapsed: false, // 折叠组关闭
        collapseDepth: 3, // 折叠组 2 级菜单
        useFolderTitleFromIndexFile: true, // 使用当前文件夹的 index.md 文件中的信息来获取菜单名称
        includeFolderIndexFile: false,  // 关闭在侧边栏菜单中包含文件夹路径 index.md 文件
        sortMenusByName: true, // 按名称对菜单项中的项目进行排序
        sortMenusOrderNumericallyFromLink: true, // 如果菜单名称以数字开头，则按数字而不是名称排序
      },
      {
        documentRootPath: '/docs',
        scanStartPath: 'Notes',
        resolvePath: '/Notes/',
        useTitleFromFileHeading: true, // 从 h1 标签中获取菜单标题
        collapsed: false, // 折叠组关闭
        collapseDepth: 2, // 折叠组 2 级菜单
        useFolderTitleFromIndexFile: true, // 使用当前文件夹的 index.md 文件中的信息来获取菜单名称
        includeFolderIndexFile: false,  // 关闭在侧边栏菜单中包含文件夹路径 index.md 文件
        sortMenusByName: true, // 按名称对菜单项中的项目进行排序
        sortMenusOrderNumericallyFromLink: true, // 如果菜单名称以数字开头，则按数字而不是名称排序
      },
      {
        documentRootPath: '/docs',
        scanStartPath: 'Exam',
        resolvePath: '/Exam/',
        useTitleFromFileHeading: true,
        collapsed: false,
        collapseDepth: 2,
        useFolderTitleFromIndexFile: true,
        includeFolderIndexFile: false,
        sortMenusByName: true,
        sortMenusOrderNumericallyFromLink: true,
      },
      {
        documentRootPath: '/docs',
        scanStartPath: 'GFW',
        resolvePath: '/GFW/',
        useTitleFromFileHeading: true,
        collapsed: false,
        collapseDepth: 2,
        useFolderTitleFromIndexFile: true,
        includeFolderIndexFile: false,
        sortMenusByName: true,
        sortMenusOrderNumericallyFromLink: true,
      },
      {
        documentRootPath: '/docs',
        scanStartPath: 'DP',
        resolvePath: '/DP/',
        useTitleFromFileHeading: true,
        collapsed: false,
        collapseDepth: 2,
        useFolderTitleFromIndexFile: true,
        includeFolderIndexFile: false,
        sortMenusByName: true,
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
