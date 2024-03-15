import {fileURLToPath, URL} from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  const dataDir = env.VITE_DATA_DIR
  const locale = env.VITE_LOCALE

  return {
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@data': fileURLToPath(new URL('./src' + dataDir, import.meta.url))
      }
    },
    build: {
      outDir: '../apps/' + locale,
      emptyOutDir: true
    }
  }
})
