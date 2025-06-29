import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy  } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        { src: 'data', dest: '' },
        { src: 'src/assets', dest: 'src' },
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})

