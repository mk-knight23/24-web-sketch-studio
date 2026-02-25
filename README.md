# 24-web-sketch-studio

# Web Sketch Studio

<div align="center">

![Vue 3](https://img.shields.io/badge/Vue_3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Konva.js](https://img.shields.io/badge/Konva.js-FF5722?style=for-the-badge&logo=konva&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A high-performance, multi-layer canvas drawing application built with Vue 3 and Konva.js**

[GitHub](https://github.com/mk-knight23/24-web-sketch-studio)

</div>

---

## 📦 Deployment

### Live URLs

| Platform | Status | URL |
|----------|--------|-----|
| **Render** | ✅ Ready | [Deploy on Render](https://dashboard.render.com) |
| **Vercel** | ✅ Ready | [Deploy on Vercel](https://vercel.com) |
| **Firebase** | ✅ Ready | [Deploy on Firebase](https://firebase.google.com) |
| **AWS Amplify** | ✅ Ready | [Deploy on AWS Amplify](https://aws.amazon.com/amplify/) |
| **GitHub Pages** | ✅ Ready | [Live Demo](https://mk-knight23.github.io/24-web-sketch-studio/) |

### Render (One-Click Deploy)
This repository includes a `render.yaml` blueprint for automated deployment:
1. Visit [dashboard.render.com](https://dashboard.render.com)
2. Click "New +" → "Blueprint"
3. Connect repository: `mk-knight23/24-web-sketch-studio`
4. Render will auto-detect and apply the blueprint configuration

### Vercel Deployment
```bash
npx vercel --prod
```

### Firebase Deployment
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### AWS Amplify Deployment
Connect repository to AWS Amplify Console - `amplify.yml` included.

### Manual Deployment
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

## Overview

Web Sketch Studio replaces legacy canvas scripts with a robust, production-grade creative engine. It features a sophisticated layer management system, real-time tool modulators, and a high-fidelity "Studio Dark" design system.

### Problem Statement

Traditional canvas applications suffer from:
- Single-layer drawing only
- No undo/redo functionality
- Basic toolset
- No theme support

### Solution

Web Sketch Studio provides:
- **Multi-Layer Stack**: Infinite layers with visibility toggles
- **Theme System**: Dark/Light mode with persistence
- **Zero External Icons**: Inline SVGs eliminate runtime dependencies
- **Hardware Acceleration**: Konva.js for smooth rendering
- **Full Accessibility**: ARIA labels and keyboard support

---



## ✨ Features

This repository has been upgraded with the following features:

1. **Add Vue 3 Composition API** ✅
2. **Implement Pinia for state** ✅
3. **Add Vue Router guards** ✅
4. **Create composables** ✅
5. **Add Teleport and Suspense** ✅
6. **Implement v-model optimization** ✅
7. **Add TypeScript support** ✅
8. **Create reusable components** ✅
9. **Add transitions and animations** ✅
10. **Implement Vitest tests** ✅

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Tech Stack

- Modern web framework
- Optimized for performance
- Responsive design
- Accessibility ready

## 🛠️ Installation

```bash
git clone https://github.com/mk-knight23/24-web-sketch-studio.git
cd 24-web-sketch-studio
npm install
```

## 📝 License

MIT

---

*Last updated: 2026-02-26*
