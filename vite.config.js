import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  base: '/swathi_digital_photos/', // Ensure the base path is set to your repository name
  assetsInclude: ['**/*.JPG', '**/*.jpg']
})
