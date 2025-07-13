# VitePress 安装教程

VitePress 是一个由 Vite 和 Vue 驱动的静态站点生成器（SSG）。

它设计简洁、性能出色，非常适合用于构建技术文档、博客和个人网站。

## 前期工作

1. 工具安装

    - 运行环境（必装）：[Node.js](https://nodejs.org/zh-cn)
    - 代码编辑器（建议安装）：[VS Code](https://code.visualstudio.com/) 或者 [Cursor](https://cursor.com/) 等
    - 代码管理工具（可选安装）：[Git](https://git-scm.com/)

2. 更换 `Node.js` 镜像源

    ```bash
    # 查看源
    npm config get registry

    # 更换阿里云源
    npm config set registry https://registry.npmmirror.com/

    # 换回默认源
    npm config set registry https://registry.npmjs.org/
    ```

3. 安装 `pnpm` 包管理器

    ```bash
    # 安装 pnpm
    npm install -g pnpm

    # 查看版本号
    pnpm -v
    ```

4. 创建目录

    找一个你熟悉的地方新建一个空文件夹

## 安装

安装分为 [全新安装](#全新安装) 和 [现有安装](#现有安装) 两种方式，选择其中一种。

### 全新安装

1. 安装依赖

    - 使用 VS Code 打开这个空文件夹，在 VS Code 中使用快捷键 `Crtl` + `~` 打开终端
    - 然后我们在终端使用下面的命令安装 VitePress

    ```bash
    pnpm add -D vitepress
    ```

2. 初始化向导

    ```bash
    pnpm vitepress init
    ```

    ```bash:no-line-numbers {4}
    T   Welcome to VitePress!
    |
    o  Where should VitePress initialize the config?
    |  ./docs
    |
    o  Site title:
    |  My Awesome Project
    |
    o  Site description:
    |  A VitePress Site
    |
    o  Theme:
    |  Default Theme
    |
    o  Use TypeScript for config and theme files?
    |  Yes
    |
    o  Add VitePress npm scripts to package.json?
    |  Yes
    |
    —  Done! Now run npm run docs:dev and start writing.
    ```

### 现有安装

1. 下载仓库

    <https://github.com/wkwbk/wkwbk.github.io>

2. 安装依赖

    - 使用 VS Code 打开解压后的文件夹，在 VS Code 中使用快捷键 `Crtl` + `~` 打开终端
    - 然后在终端使用下面的命令安装依赖

    ```bash
    pnpm install
    ```

## 启动

本地启动开发环境，来开发你的网站

```bash
pnpm run docs:dev
```

生成了一个本地 `5173` 端口的链接，复制到浏览器打开进行预览

```bash:no-line-numbers{9}
C:\myWebsite\Vitepress>pnpm run docs:dev

> @ docs:dev C:\myWebsite\Vitepress
> vitepress dev docs


  vitepress v1.6.3

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

按 `Ctrl` + `C` 即可退出开发模式
