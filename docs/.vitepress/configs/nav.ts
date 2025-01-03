/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },

  { text: '导航', link: '/nav/' },

  {
    text: '学习笔记',
    items: [
      { text: 'Git', link: '/Notes/Git/00.Git-学习笔记' },
      { text: 'Java', link: '/Notes/Java/00.Java-类的五大成员' },
      { text: 'Linux', link: '/Notes/Linux/00.Linux-学习笔记' },
      { text: 'Hadoop', link: '/Notes/Hadoop/00.虚拟机中搭建-Hadoop-集群' },
      { text: 'Markdown', link: '/Notes/Markdown/00.Markdown-入门教程及书写风格' },
      { text: 'Docker', link: '/Notes/Docker/00.Docker-管理工具-Portainer' },
      { text: '备忘录', link: '/Notes/Memo/00.英语语法' },
      { text: '思源', link: '/思源/第一年上学期/2025年01月06号/00.Java程序设计' },
    ]
  },

  {
    text: '证书考试',
    items: [
      { text: '软考中级', link: '/Exam/SDE/00.软考中级-软件设计师' },
      { text: '计算机二级', link: '/Exam/NCRE/00.计算机二级-MS-Office' },
    ]
  },

  {
    text: '科学上网',
    items: [
      { text: '介绍', link: '/GFW/introduce/00.科学上网工具哪个好？' },
      { text: '搭建', link: '/GFW/build/00.233-一键安装脚本' },
      { text: '使用', link: '/GFW/use/00.v2rayN-使用教程' }
    ]
  },

  {
    text: '设计模式',
    items: [
      { text: '创建型模式', link: '/DP/创建型模式' },
      { text: '结构型模式', link: '/DP/结构型模式' },
      { text: '行为型模式', link: '/DP/行为型模式' }
    ]
  },
]