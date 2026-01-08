import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For username.github.io: use base: '/'
// For regular repo: use base: '/RepoName/'
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/MyPortfolio/' : '/',
})
