import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      // 增加下面的配置项,这样在运行时就能检查eslint规范
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      })
    ],
    base: './',
    envPrefix: 'VITE_',
    define: {
      'process.env': loadEnv(mode, process.cwd())
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      /* CSS 预处理器 */
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/index.scss";'
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks (id) {
            if (id.includes(path.join(__dirname, 'src/store/index.ts'))) {
              return 'vendor'
            }
          }
        }
      }
    },
    server: {
      // 开启 https，一般不开启
      // https: false,
      port: 8085,
      host: '0.0.0.0',
      // 配置代理转发，解决跨域问题，可以配置多个
      proxy: {
        '/fftai-mrc': {
          // target: 'https://uatfris.fftai.com/', // uat
          // target: "https://qafris.fftai.com/", //qa
          target: 'http://101.133.149.215:8086/', // dev
          changeOrigin: true
          //   ws: true,
          // rewrite: (path) =>
          //   path.replace(/^\/fftai-mrc/, "/fftai-mrc"),
          // rewrite: (path) => path.replace(/^\/fftai-mrc/, "")
        }
      }
    }
  }
})
