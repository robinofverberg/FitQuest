import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  // Other Vite configuration...
  plugins: [
    react(), // Include Vue plugin if needed
  ],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
});
