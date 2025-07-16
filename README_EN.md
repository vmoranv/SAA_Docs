# Snowbreak Auto Assistant Documentation

<div align="center">

![Logo](./assets/logo.png)

**Official Documentation Site for Snowbreak Auto Assistant**

[![VitePress](https://img.shields.io/badge/VitePress-1.6.3-646cff?style=flat-square&logo=vite)](https://vitepress.dev/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.5.17-4fc08d?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://github.com/vmoranv/SAA_Docs/blob/master/LICENSE)

[📖 Live Documentation](https://your-docs-site.com) | [🚀 Quick Start](#quick-start) | [🌍 中文](./README.md)

</div>

## 📋 Project Overview

This is the official documentation site for **Snowbreak Auto Assistant (SAA)**, built with VitePress. SAA is an automation assistant tool designed specifically for the game "Snowbreak: Containment Zone", providing daily task automation, mini-game assistance, and various game helper functions.

## ✨ Features

### 🎯 Daily Activities Automation
- 📦 **Material Dungeons** - Auto-farm various materials
- 🧩 **Character Fragments** - Auto-collect character fragments
- ⚔️ **Simulation Sweep** - Auto-complete simulation challenges
- 🛒 **Shop Purchase** - Auto-purchase shop items

### 🎮 Game Assistance
- 🎣 **Fishing Helper** - Automated fishing functionality
- 💝 **Heart Guessing** - Auto-complete heart guessing mini-game
- 🔍 **Source Analysis** - Auto-analyze information sources
- 💧 **Heart Water Bullet** - Auto-complete water bullet mini-game

### ⌨️ Hotkey Tools
- ⭐ **Nova Pioneer Auto Collection** - Auto-collect resources
- ⚡ **Nita E Auto QTE** - Auto-complete QTE operations

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/vmoranv/SAA_Docs.git
cd SAA_Docs

# Install dependencies
pnpm install
```

### Local Development

```bash
# Start development server
pnpm docs:dev

# Build for production
pnpm docs:build

# Preview production build
pnpm docs:preview
```

## 🌍 Multi-language Support

This documentation site supports both Chinese and English:

- **Chinese** (Default): `/`
- **English**: `/en/`

Language switching is available through the dropdown menu in the top-right corner of the navigation bar.

## 🎨 Tech Stack

- **Framework**: [VitePress](https://vitepress.dev/) - Static site generator based on Vite and Vue
- **UI**: VitePress default theme + custom styles
- **Fonts**: Google Fonts (Inter + Noto Sans SC + JetBrains Mono)
- **Icons**: Emoji + MDI Icons
- **Deployment**: Supports GitHub Pages, Vercel, Netlify, etc.

## 📁 Project Structure

```
SAA_Docs/
├── .vitepress/           # VitePress configuration
│   ├── config.mts        # Main configuration file
│   └── theme/            # Theme customization
│       ├── index.ts      # Theme entry point
│       └── style.css     # Custom styles
├── assets/               # Static assets
│   └── logo.png         # Project logo
├── en/                   # English documentation
│   ├── index.md         # English homepage
│   ├── markdown-examples.md
│   └── api-examples.md
├── index.md              # Chinese homepage
├── markdown-examples.md  # Markdown examples
├── api-examples.md      # API examples
└── README.md            # Project documentation
```

## 🤝 Contributing

We welcome contributions of all kinds!

### How to Contribute

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Documentation Guidelines

- Write documentation in Markdown format
- Keep Chinese and English content synchronized
- Add appropriate emojis and icons to enhance readability
- Follow existing documentation structure and style

## 📄 License

This project is licensed under the [MIT License](https://github.com/vmoranv/SAA_Docs/blob/master/LICENSE).

## 🔗 Related Links

- [Snowbreak Auto Assistant Main Project](https://github.com/LaoZhuJackson/SnowbreakAutoAssistant)
- [VitePress Official Documentation](https://vitepress.dev/)
- [Vue.js Official Documentation](https://vuejs.org/)

## 📞 Contact Us

If you have any questions or suggestions, feel free to contact us:

- 💬 Issues: [GitHub Issues](https://github.com/LaoZhuJackson/SnowbreakAutoAssistant/issues)
- 🐛 Bug Report: [Bug Report Template](https://github.com/LaoZhuJackson/SnowbreakAutoAssistant/issues/new?template=bug_report.md)

---

<div align="center">

**⭐ If this project helps you, please give us a Star!**

Made with ❤️ by SAA Team

</div>