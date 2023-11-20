 import { defineConfig } from 'vite'
 import { resolve } from 'path'
 import vue from '@vitejs/plugin-vue'

 export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, '../packages/index.js'),
            name: 'my-app',
            fileName: (format) => `my-app-${format}.js`, // umd es
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                // umd模式下为外部的依赖提供全局变量
                globals: {
                    vue: 'Vue',
                }
            }
        }
    },
    plugins: [
        vue({
            include: [/\.vue$/],
        })
    ]
 })