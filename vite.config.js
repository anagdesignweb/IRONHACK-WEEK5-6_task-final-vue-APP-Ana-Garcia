import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: process.env.NODE_ENV === 'production' ? '/task-APP_Ana_Garcia/' : '/',
    build: {
        outDir: 'docs',
        rollupOptions: {
            output: {
                entryFileNames: `assets/file_[name].[hash].js`,
                chunkFileNames: `assets/file_[name].[hash].js`,
                assetFileNames: `assets/file_[name].[hash].[ext]`,
            },
        }
    },
    server: {
        base: process.env.NODE_ENV === 'production' ? '/task-APP_Ana_Garcia/' : '/',
    }
})