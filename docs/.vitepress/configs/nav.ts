/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },

  { text: '导航', link: '/nav/' },

  {
    text: '人工智能',
    items: [
      { text: 'Cursor', link: '/Notes/AI/01.Cursor-基本使用' },
    ]
  },

  {
    text: '学习笔记',
    items: [
      {
        text: '语言基础',
        items: [
          { text: 'Java', link: '/Notes/Lang/Java/第一阶段/00.Java-环境配置' },
          { text: 'Shell', link: '/Notes/Lang/Shell/00.Shell-脚本-学习笔记' },
          { text: 'Python', link: '/Notes/Lang/Python/00.pip-使用国内镜像源' },
          { text: 'English', link: '/Notes/Lang/English/00.英语语法.md' },
          { text: 'Markdown', link: '/Notes/Lang/Markdown/00.Markdown-入门教程' },
        ]
      },
      {
        text: '系统运维',
        items: [
          { text: 'Linux', link: '/Notes/Sys/Linux/00.Linux-学习笔记' },
          { text: 'Docker', link: '/Notes/Sys/Docker/00.Docker-安装教程' },
        ]
      },
      {
        text: '数据存储',
        items: [
          { text: 'MySQL', link: '/Notes/DB/MySQL/00.MySQL-学习笔记' },
          { text: 'Hadoop', link: '/Notes/DB/Hadoop/00.虚拟机中搭建-Hadoop-集群' },
        ]
      },
      {
        text: '协作工具',
        items: [
          { text: 'Git', link: '/Notes/Tool/Git/00.Git-学习笔记' },
        ]
      },
    ]
  },

  {
    text: '证书考试',
    items: [
      { text: '思源', link: '/Exam/思源/第一年上学期/2024年12月31号/00.数据库原理及应用' },
      { text: '软考中级', link: '/Exam/SDE/00.软考中级-软件设计师' },
      { text: '计算机二级', link: '/Exam/NCRE/00.计算机二级-MS-Office' },
    ]
  },

  {
    text: '科学上网',
    items: [
      { text: '介绍', link: '/GFW/介绍/00.科学上网工具介绍' },
      { text: '搭建', link: '/GFW/搭建/00.节点搭建教程' },
      { text: '使用', link: '/GFW/使用/00.v2rayN-使用教程' }
    ]
  },

  {
    text: '设计模式',
    items: [
      { text: '六大原则', link: '/DP/六大原则' },
      { text: '创建型模式', link: '/DP/创建型模式/00.工厂方法' },
      { text: '结构型模式', link: '/DP/结构型模式/00.适配器' },
      { text: '行为型模式', link: '/DP/行为型模式/00.责任链' }
    ]
  },
]