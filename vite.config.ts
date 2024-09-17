import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https//SebastianPicas.github.io/SaludArqui_Front',
  server: {
    proxy: {
      // Aquí definimos el proxy
      '/api': {
        target: 'https://saludarqui.uc.r.appspot.com',
        changeOrigin: true,  // Cambia el origen de la solicitud a la URL del target
        rewrite: (path) => path.replace(/^\/api/, '')  // Reescribe la URL eliminando '/api'
      }
    }
  }
});
