import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/swathi_digital_photos/', // Replace with your repository name
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg']
})
