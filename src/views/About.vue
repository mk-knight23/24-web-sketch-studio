<template>
  <div class="max-w-3xl mx-auto px-6 py-12 space-y-8">
    <section>
      <h2 class="text-3xl font-black tracking-tight mb-4">About DrawLab</h2>
      <p class="text-gray-400 leading-relaxed">
        DrawLab is a free, browser-based drawing and canvas tool. Create sketches, diagrams, and
        digital art using pen, shapes, and eraser tools. Export your work as PNG. Built and maintained
        by <strong class="text-white">Musharraf Kazi</strong>.
      </p>
    </section>

    <section>
      <h3 class="text-xl font-bold mb-3">Features</h3>
      <ul class="space-y-2 text-gray-400 text-sm">
        <li>• Freehand pen drawing with adjustable stroke width and color</li>
        <li>• Shape tools: rectangles, circles, lines</li>
        <li>• Eraser tool for precise corrections</li>
        <li>• Undo/redo with full history</li>
        <li>• Export canvas as PNG image</li>
        <li>• Dark theme optimized for creative work</li>
        <li>• Responsive canvas that adapts to your screen</li>
      </ul>
    </section>

    <section id="privacy">
      <h3 class="text-xl font-bold mb-3">Privacy Policy</h3>
      <p class="text-gray-400 text-sm leading-relaxed">
        <strong class="text-white">Data Collection:</strong> DrawLab does not collect personal data.
        No accounts, no registration. Your drawings exist only in your browser's canvas memory and
        are never transmitted to any server.
      </p>
      <p class="text-gray-500 text-xs mt-3">Last updated: July 2026</p>
    </section>

    <section id="terms">
      <h3 class="text-xl font-bold mb-3">Terms of Service</h3>
      <p class="text-gray-400 text-sm leading-relaxed">
        DrawLab is provided "as is" without warranty. This is a free educational and creative tool.
        You retain full ownership of any artwork you create.
      </p>
      <p class="text-gray-500 text-xs mt-3">Last updated: July 2026</p>
    </section>

    <section>
      <h3 class="text-xl font-bold mb-3">Contact</h3>
      <p class="text-gray-400 text-sm">
        For feedback, visit
        <a
          href="https://github.com/mk-knight23/24-web-sketch-studio/issues"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-400 hover:underline"
        >GitHub Issues</a>.
      </p>
    </section>

    <router-link
      to="/"
      class="inline-block mt-4 text-sm text-blue-400 hover:underline"
    >← Back to DrawLab</router-link>
  </div>
</template>
