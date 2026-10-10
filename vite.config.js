import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // './' = relative URLs. Works on username.github.io AND username.github.io/repo-name/
  // without editing anything when you rename the repo.
  base: '/portfolio/',
})
