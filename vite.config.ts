import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const publicationDir = 'docs'

// https://vitejs.dev/config/
export default defineConfig( ({ mode}) => {
  
  return {
    plugins: [
      { name: 'add-datetime',
        transformIndexHtml(html) {
          const datetime = new Date().toISOString();
          console.log('\nGenerate Date and Time: ', datetime);
          return html.replace(/id="datetime">/, `id="datetime">${datetime}`);
        }
      },
      vue()
    ],
  base: "/My-App",
  publicDir: false,
  build: {
    minify: false,
    outDir: publicationDir,
    emptyOutDir: false,
/*     sourcemap: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }, */
  },
}
})