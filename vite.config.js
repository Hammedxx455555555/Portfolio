import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' ,
    rollupOptions: {
      external: [
        'react', 
        'react-dom', 
        'react-router-dom',
        'animate.css',
        'react-icons/fa',
        'react-typing-effect',
        'react-countup'  
      ],
    },  
},
})
