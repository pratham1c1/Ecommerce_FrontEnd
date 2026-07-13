import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// A relative base keeps built assets working on GitHub Pages project sites.
export default defineConfig({ base: '/Ecommerce_FrontEnd', plugins: [react()] })
