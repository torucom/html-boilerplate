import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: 'index.html',
      output: {
        entryFileNames: 'assets/js/[name].js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop();
          if (ext === 'css') return 'assets/css/[name].[ext]';
          if (['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp'].includes(ext)) return 'assets/images/[name].[ext]';
          if (['woff', 'woff2', 'ttf', 'otf', 'eot'].includes(ext)) return 'assets/fonts/[name].[ext]';
          return 'assets/[name].[ext]';
        }
      }
    }
  }
});