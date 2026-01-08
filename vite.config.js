// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // 개발 중(serve)에는 '/'를 써서 에러를 없애고
    // 빌드(build)할 때만 깃허브 경로인 '/beoms/'!
    base: command === 'serve' ? '/' : '/beoms/',
  }
})