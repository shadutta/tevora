import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  // - Vercel / normal hosting should use "/"
  // - GitHub Pages should use "/<repo>/"
  const base = process.env.VITE_BASE ?? '/'

  return {
    base,
    plugins: [react()],
  }
})
