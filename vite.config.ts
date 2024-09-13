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

  let base_URL = './'
  if (mode === 'production' && process.env.VITE_BASE_URL) base_URL=process.env.VITE_BASE_URL
  console.log ('\nbuild mode is', mode)
  console.log('process.env.VITE_BASE_URL', process.env.VITE_BASE_URL,'\n')
  console.log('Base_URL', base_URL ,'\n')
  {
    //DominionContentGenerate(publicationDir);
    let ArgGenLocale = "Merge"
    if (process.argv.slice(3)[0] == "Gen") {
        ArgGenLocale = "Gen&Merge"
    }
    //HandleLocaleGenerateAndMerge(ArgGenLocale, publicationDir)
  }
  
  return {
    appType: 'spa',
    base: "/My-App",
    publicDir: false, //  Do not use publicDir feature to avoid duplcation of all image and pdf files.
    /*
    Do not use publicDir feature to avoid duplcation of all image and pdf files.
    */
    define: {
      'Pkgejson_Version': JSON.stringify(packageJson.version),
      'Pkgejson_Name': JSON.stringify(packageJson.name),
      'Pkgejson_URL': JSON.stringify(packageJson.repository.url),
      'Pkgejson_Date': JSON.stringify(new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'numeric' }))
    },
    plugins: [
      { name: 'add-datetime',
        transformIndexHtml(html) {
          const datetime = new Date().toLocaleTimeString();
          console.log('\nGenerate Date and Time: ', datetime);
          return html.replace(/id="datetime">/, `id="datetime">${datetime}`);
        }
      },
      vue()
    ],
    optimizeDeps: {
      include: ['vue', 'vue-i18n']
    },
    resolve: {
      //extensions: ['.ts', '.vue'],
      alias: {
        // Alias pour les modules non-Esbuild compatibles avec Vite
        //'@': fileURLToPath(new URL('./src', import.meta.url)),
        //'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-bundler.js',
        //'vue': 'vue/dist/vue.esm-bundler.js', 
      },
    },
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

