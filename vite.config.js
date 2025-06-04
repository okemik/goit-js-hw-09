import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    base: '/goit-js-hw-09/', // <-- GitHub repo adınızı yazın
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: '', // Eğer HTML dosyalarınız kök dizindeyse
    build: {
      sourcemap: true,
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        input: glob.sync('./*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: chunkInfo => {
            if (chunkInfo.name === 'commonHelpers') {
              return 'commonHelpers.js';
            }
            return '[name].js';
          },
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
    plugins: [
      injectHTML(),
      FullReload(['./*.html']), // düzeltildi
      SortCss({
        sort: 'mobile-first',
      }),
    ],
  };
});
