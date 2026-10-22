import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { GITHUB_PATH, handleGitHub } from './apps/ContributorStats/api/_github.js'
import { ESPN_PATH, handleEspn } from './apps/ESPN_API/api/_espn.js'
import { handleCodando, CODANDO_PATH } from './apps/WakaTimeAPI/api/_codando.js'
import { handleWakaTime, WAKATIME_PATH } from './apps/WakaTimeAPI/api/_wakatime.js'

const API_ROUTES = {
  [GITHUB_PATH]: handleGitHub,
  [ESPN_PATH]: handleEspn,
  [CODANDO_PATH]: handleCodando,
  [WAKATIME_PATH]: handleWakaTime,
}

function portfolioApi(env) {
  const middleware = (req, res, next) => {
    const handler = API_ROUTES[new URL(req.url, 'http://localhost').pathname]
    if (!handler) return next()
    handler(req, res, env).catch(next)
  }

  return {
    name: 'portfolio-api',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [react(), portfolioApi(loadEnv(mode, process.cwd(), ''))],
}))
