# Snowbreak Auto Assistant Documentation

<div align="center">

![Logo](./assets/logo.png)

**尘白禁区自动化助手文档站点**

[![VitePress](https://img.shields.io/badge/VitePress-1.6.3-646cff?style=flat-square&logo=vite)](https://vitepress.dev/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.5.17-4fc08d?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://github.com/vmoranv/SAA_Docs/blob/master/LICENSE)

[📖 在线文档](https://your-docs-site.com) | [🚀 快速开始](#快速开始) | [🌍 English](./README_EN.md)

</div>

## 📋 项目简介

这是 **Snowbreak Auto Assistant (SAA)** 的官方文档站点，基于 VitePress 构建。SAA 是一个专为《尘白禁区》游戏设计的自动化助手工具，提供日常任务、小游戏和各种游戏辅助功能。

## ✨ 功能特性

### 🎯 日常活动自动化
- 📦 **材料副本** - 自动刷取各类材料
- 🧩 **角色碎片** - 自动收集角色碎片
- ⚔️ **拟境扫荡** - 自动完成拟境挑战
- 🛒 **商店购买** - 自动购买商店物品

### 🎮 游戏辅助功能
- 🎣 **钓鱼助手** - 自动钓鱼功能
- 💝 **猜心对局** - 自动完成猜心小游戏
- 🔍 **信源解析** - 自动解析信源
- 💧 **心动水弹** - 自动完成水弹小游戏

### ⌨️ 按键工具
- ⭐ **新星开拓自动采集** - 自动收集资源
- ⚡ **妮塔E自动QTE** - 自动完成QTE操作

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/vmoranv/SAA_Docs.git
cd SAA_Docs

# 安装依赖
pnpm install
```

### 本地开发

```bash
# 启动开发服务器
pnpm docs:dev

# 构建生产版本
pnpm docs:build

# 预览构建结果
pnpm docs:preview
```

## 🌍 多语言支持

本文档站点支持中英文双语：

- **中文** (默认): `/`
- **English**: `/en/`

语言切换通过导航栏右上角的下拉菜单实现。

## 🎨 技术栈

- **框架**: [VitePress](https://vitepress.dev/) - 基于 Vite 和 Vue 的静态站点生成器
- **UI**: VitePress 默认主题 + 自定义样式
- **字体**: Google Fonts (Inter + Noto Sans SC + JetBrains Mono)
- **图标**: Emoji + MDI Icons
- **部署**: 支持 GitHub Pages、Vercel、Netlify 等

## 📁 项目结构

```
SAA_Docs/
├── .vitepress/           # VitePress 配置
│   ├── config.mts        # 主配置文件
│   └── theme/            # 主题自定义
│       ├── index.ts      # 主题入口
│       └── style.css     # 自定义样式
├── assets/               # 静态资源
│   └── logo.png         # 项目Logo
├── en/                   # 英文文档
│   ├── index.md         # 英文首页
│   ├── markdown-examples.md
│   └── api-examples.md
├── index.md              # 中文首页
├── markdown-examples.md  # Markdown示例
├── api-examples.md      # API示例
└── README.md            # 项目说明
```

## 🤝 贡献指南

我们欢迎任何形式的贡献！

### 如何贡献

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

### 文档编写规范

- 使用 Markdown 格式编写文档
- 中英文内容保持同步更新
- 添加适当的 emoji 和图标增强可读性
- 遵循现有的文档结构和样式

## 📄 许可证

本项目基于 [MIT License](https://github.com/vmoranv/SAA_Docs/blob/master/LICENSE) 开源。

## 🔗 相关链接

- [Snowbreak Auto Assistant 主项目](https://github.com/LaoZhuJackson/SnowbreakAutoAssistant)
- [VitePress 官方文档](https://vitepress.dev/)
- [Vue.js 官方文档](https://vuejs.org/)

## 📞 联系我们

如果你有任何问题或建议，欢迎通过以下方式联系我们：

- 💬 Issues: [GitHub Issues](https://github.com/LaoZhuJackson/SnowbreakAutoAssistant/issues)
- 🐛 Bug Report: [Bug Report Template](https://github.com/LaoZhuJackson/SnowbreakAutoAssistant/issues/new?template=bug_report.md)

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给我们一个 Star！**

Made with ❤️ by SAA Team

</div>