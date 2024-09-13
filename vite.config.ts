import { defineConfig } from 'vite';
import path from 'path';
import packageJson from './package.json';
import VueDevTools from 'vite-plugin-vue-devtools'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/unplugin-vue-i18n/vite';
import { del } from '@kineticcafe/rollup-plugin-delete';
//import { DominionContentGenerate, HandleLocaleGenerateAndMerge } from './plugins/vite-dominion-content';

const devServerPort = 5173
const publicationDir = 'docs'

// https://vitejs.dev/config/
export default defineConfig( ({ mode}) => {
  
  return {
    appType: 'spa',
    base: "/My-App",
    publicDir: false, //  Do not use publicDir feature to avoid duplcation of all image and pdf files.
    plugins: [
      { name: 'add-datetime',
        transformIndexHtml(html) {
          const datetime = new Date().toDateString();
          console.log('\nGenerate Date and Time: ', datetime);
          return html.replace(/id="datetime">/, `id="datetime">${datetime}`);
        }
      },
      vue()
    ],

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
    server: {
      open: '/',
      proxy: {
        '^/$': {
          target: 'http://localhost:' + devServerPort,
          rewrite: () => '/index.html',
        },
        '/dominion-content.js': {
          target: 'http://localhost:' + devServerPort,
          rewrite: (path) => path.replace(/^\/dominion-content.js/, '/'+ publicationDir +'/dominion-content.js'),
        },
        '/normalize': {
          target: 'http://localhost:' + devServerPort,
          rewrite: (path) => path.replace(/^\/normalize/, '/'+ publicationDir +'/normalize'),
        },
        '/favicon.ico': {
          target: 'http://localhost:' + devServerPort,
          rewrite: (path) => path.replace(/^\/favicon.ico/, '/'+ publicationDir +'/favicon.ico'),
        },
        '/img': {
          target: 'http://localhost:' + devServerPort,
          rewrite: (path) => path.replace(/^\/img/, '/'+ publicationDir +'/img'),
        },
        '/rules': {
          target: 'http://localhost:' + devServerPort,
          rewrite: (path) => path.replace(/^\/rules/, '/'+ publicationDir +'/rules'),
        },
        '/locales': {
          target: 'http://localhost:' + devServerPort,
          rewrite: (path) => path.replace(/^\/locales/, '/'+ publicationDir +'/locales'),
        },
        '/?': {
          target: 'http://localhost:' + devServerPort,
          // rewrite: (path) => path.replace(/^\/?/, '/docs/index.html?'),
          rewrite: (path) => path.replace(/^\/?/, '/index.html?'),
        },
      },
    },
    preview: {
     proxy:{}
    }
  }
});

