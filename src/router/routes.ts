import express, { Application } from 'express'
import Log from '../tools/log/Log'

const routes = (app: Application) => {
  try {
    app.use(
      express.json(),
      // add routers here
    )
  } catch (error) {
    Log.error('router', 'Error loading routes', error)
  }
}

export { routes }
