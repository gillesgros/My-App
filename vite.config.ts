import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


const publicationDir = 'dist'

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
}
})