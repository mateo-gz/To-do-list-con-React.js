import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/To-do-list-con-React/', // Asegúrate de poner el nombre correcto
});
