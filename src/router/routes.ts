import express, { Application, Request, Response } from 'express'
import Log from '../tools/log/Log'
import swaggerUi from 'swagger-ui-express'
import * as swaggerFile from './swagger.json'
import { userRouter } from './userRouter'

const declareRoutes = (app: Application) => {
    try {
        app.set('trust proxy', 1)
            .use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
            .use(
                express.json(),
                userRouter,
            )

        app.get('/', (_req: Request, res: Response) => {
            res.send({ status: 'API is OK!', docs: '/api/docs' })
        })
    } catch (error) {
        Log.error('router', 'Error loading routes', error)
    }
}

export { declareRoutes }
