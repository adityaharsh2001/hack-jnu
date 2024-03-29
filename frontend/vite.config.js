import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
    server: {
        port: 5173,
        proxy: {
        '/api': {
            target: 'https://dcm.geekyadi.dev/api',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
        }
    }
})
