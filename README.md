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

| Category | Technology |
|----------|------------|
| **Frontend** | Vue 3.5.24, TypeScript 5.9.3 |
| **Canvas Engine** | Konva 10.2.0, vue-konva 3.3.0 |
| **Build Tool** | Vite 7.2.4 |
| **Styling** | Tailwind CSS v4 |
| **Routing** | Vue Router 4.6.4 |
| **State Management** | Pinia 3.0.4 |
| **Utilities** | VueUse 14.1.0 |
| **Animations** | MotionOne Vue 10.16.4 |

---

## 🏗️ Architecture

### Project Structure

```
24-web-sketch-studio/
├── src/
│   ├── components/       # Reusable components
│   │   ├── ui/           # UI components
│   │   │   ├── Button.vue
│   │   │   ├── Card.vue
│   │   │   ├── Badge.vue
│   │   │   └── Section.vue
│   │   ├── canvas/       # Canvas-related components
│   │   │   ├── CanvasStage.vue
│   │   │   ├── CanvasLayer.vue
│   │   │   ├── DrawingTool.vue
│   │   │   └── LayerManager.vue
│   │   ├── tools/        # Drawing tools
│   │   │   ├── BrushTool.vue
│   │   │   ├── EraserTool.vue
│   │   │   ├── ShapeTool.vue
│   │   │   └── TextTool.vue
│   │   ├── layout/       # Layout components
│   │   │   ├── Header.vue
│   │   │   ├── Sidebar.vue
│   │   │   ├── Toolbar.vue
│   │   │   └── Footer.vue
│   │   └── features/     # Feature-specific components
│   │       ├── ThemeToggle.vue
│   │       ├── UndoRedo.vue
│   │       ├── ExportCanvas.vue
│   │       └── ZoomControl.vue
│   ├── stores/           # Pinia stores
│   │   ├── useCanvas.ts
│   │   ├── useLayers.ts
│   │   └── useTheme.ts
│   ├── router/           # Vue Router config
│   │   └── index.ts
│   ├── composables/      # Vue composables
│   │   ├── useDrawing.ts
│   │   ├── useHistory.ts
│   │   ├── useExport.ts
│   │   └── useClipboard.ts
│   ├── types/            # TypeScript interfaces
│   │   ├── canvas.model.ts
│   │   ├── layer.model.ts
│   │   └── tool.model.ts
│   ├── utils/            # Utility functions
│   │   ├── color.ts
│   │   ├── geometry.ts
│   │   └── formatters.ts
│   ├── styles/           # Global styles
│   │   └── globals.css
│   ├── App.vue           # Root component
│   └── main.ts           # Entry point
├── public/               # Static assets
├── .github/workflows/    # CI/CD pipelines
│   ├── ci.yml           # Lint and test
│   └── deploy.yml       # Deploy to Vercel & GitHub Pages
├── render.yaml           # Render deployment config
├── index.html            # HTML entry point
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
├── tailwind.config.ts    # Tailwind config
└── README.md             # This file
```

### Technology Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Vue 3.5.24 (Composition API) |
| **Canvas Engine** | Konva 10.2.0 + vue-konva 3.3.0 |
| **Language** | TypeScript 5.9.3 |
| **Styling** | Tailwind CSS v4 |
| **State** | Pinia 3.0.4 (official Vue store) |
| **Routing** | Vue Router 4.6.4 |
| **Utilities** | VueUse 14.1.0 (composition utilities) |
| **Animations** | MotionOne Vue 10.16.4 |
| **Build Tool** | Vite 7.2.4 |

### Key Architectural Patterns

- **Composition API**: Reusable logic with Vue 3 composables
- **Canvas Rendering**: Konva.js for hardware-accelerated canvas
- **Multi-Layer System**: Stack-based layer management
- **State Management**: Pinia for reactive canvas state
- **Type Safety**: Full TypeScript coverage with strict mode
- **Router Guards**: Navigation guards for protected routes
- **Teleport & Suspense**: Modern Vue 3 features
- **v-model Optimization**: Efficient two-way binding
- **Lazy Loading**: Route and component-based code splitting

### Canvas Architecture

```
Konva Stage
    ↓
Konva Layers (Stack)
    ↓
Konva Shapes/Nodes
    ↓
User Interactions (Draw, Move, Scale)
```

- **Konva Stage**: Canvas container
- **Layers**: Infinite stack for drawing separation
- **Shapes**: Lines, rectangles, circles, text, images
- **Interactions**: Event handlers for drawing tools
- **Export**: Canvas to image/PDF export

### Layer Management

```typescript
{
  layerStack: {
    activeLayer: "Current drawing layer",
    visibility: "Toggle per layer",
    opacity: "Adjustable per layer",
    blending: "Blend modes supported"
  },
  operations: {
    add: "Create new layer",
    delete: "Remove layer",
    merge: "Combine layers",
    reorder: "Change z-index",
    duplicate: "Copy layer"
  }
}
```

### State Management (Pinia)

```
User Action → Pinia Store → Component Update → Canvas Update
     ↓              ↓               ↓               ↓
  Tool Select  useCanvas()    Vue Reactivity    Konva Renderer
  Layer Click  useLayers()    Auto-update       Redraw
  Theme Click  useTheme()     DOM Update        Preview
```

- **useCanvas**: Canvas state (width, height, zoom, pan)
- **useLayers**: Layer stack state (layers list, active layer)
- **useTheme**: Theme state (dark/light mode)

### Vue Composables

```typescript
{
  useDrawing: "Drawing logic for each tool",
  useHistory: "Undo/redo stack management",
  useExport: "Canvas export to PNG/JPEG/PDF",
  useClipboard: "Cut/copy/paste operations"
}
```

### Drawing Tools

```typescript
{
  brush: {
    type: "Freehand drawing",
    options: "Size, color, opacity, smoothness"
  },
  eraser: {
    type: "Eraser tool",
    options: "Size, hardness"
  },
  shape: {
    type: "Rectangle, circle, line, polygon",
    options: "Fill, stroke, border radius"
  },
  text: {
    type: "Text tool",
    options: "Font, size, color, style"
  },
  select: {
    type: "Object selection",
    options: "Move, resize, rotate"
  }
}
```

### History & Undo/Redo

```typescript
{
  historyStack: {
    undo: "Revert to previous state",
    redo: "Reapply next state",
    max: "Configurable history depth"
  },
  stateCapture: {
    before: "Save state before action",
    after: "Save state after action",
    compression: "Optimize memory usage"
  }
}
```

### Performance Optimizations

- **Hardware Acceleration**: Konva.js GPU rendering
- **Layer Caching**: Cache off-screen layers
- **Debounced Events**: Optimize drawing events
- **Lazy Loading**: Route and component-based
- **Tree Shaking**: Icon library and dependencies
- **Minimal Bundle**: Pinia ~1.5KB, Vue 3 ~45KB
- **Virtual Scrolling**: For layer list (large projects)

### Theme System

```typescript
{
  theme: {
    modes: {
      light: "Default light theme",
      dark: "Studio dark theme (default)",
      auto: "System preference detection"
    },
    storage: "LocalStorage",
    transition: "Smooth theme switching"
  }
}
```

### Design System

```typescript
// Sketch Studio Theme
{
  typography: {
    heading: "Modern sans-serif",
    body: "Clean, readable",
    mono: "Technical canvas info"
  },
  color: {
    primary: "indigo-600",
    secondary: "slate-600",
    accent: "emerald-500",
    neutral: "slate-50",
    canvas: "Neutral gray for drawing"
  },
  spacing: {
    toolbar: "Optimal for tools",
    sidebar: "Layer panel width",
    canvas: "Max available space"
  },
  layout: {
    container: "Full screen canvas",
    panels: "Floating/overlay UI",
    responsive: "Desktop-first with tablet support"
  }
}
```

### Export & Import

```typescript
{
  export: {
    formats: ["PNG", "JPEG", "SVG", "PDF"],
    quality: "Configurable DPI (72-300)",
    options: "Include/exclude layers"
  },
  import: {
    formats: ["PNG", "JPEG", "SVG"],
    options: "Layer import, background image"
  },
  project: {
    save: "Save project file",
    load: "Load project file",
    format: "JSON with canvas state"
  }
}
```

### Multi-Platform Deployment

| Platform | URL | Auto-Deploy |
|----------|-----|-------------|
| GitHub Pages | https://mk-knight23.github.io/24-web-sketch-studio/ | ✅ GitHub Actions |
| Vercel | https://24-web-sketch-studio.vercel.app | ✅ GitHub Actions |
| Render | https://24-web-sketch-studio.onrender.com | ✅ render.yaml |
| Firebase | https://web-sketch-studio.web.app | Manual |
| AWS Amplify | https://main.24-web-sketch-studio.amplifyapp.com | Manual |

### CI/CD Pipeline

```yaml
Push to main → CI Check → Build → Deploy
     ↓            ↓          ↓         ↓
  Trigger     Lint+Test   Production   Vercel/GitHub Pages
              (Vitest)   Build
```

- **CI**: Linting and build checks
- **Testing**: Vitest + Vue Test Utils
- **Build**: Production-optimized bundle
- **Deploy**: Automatic to Vercel and GitHub Pages

---

## 🛠️ Installation

```bash
git clone https://github.com/mk-knight23/24-web-sketch-studio.git
cd 24-web-sketch-studio
npm install
```

## 📝 License

MIT

---

*Last updated: 2026-03-01*
