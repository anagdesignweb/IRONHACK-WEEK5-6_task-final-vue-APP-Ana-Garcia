import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Carpeta donde creara el build
  build: { outDir: 'docs' },
  // comprobamos si estamso en produccion y la base es el nombre del repositorio, sino la raiz
  //condicion ? 'nombre-repositorio' : '/'

  // produccion seria github pages
  //desarrollo seria yarn dev
  base: process.env.NODE_ENV === 'production' ? '/task-APP_Ana_Garcia/' : '/',
})
