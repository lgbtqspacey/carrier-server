// First import Sentry instrumentation
import './tools/log/Sentry'

// Then import modules
import * as dotenv from 'dotenv'
import * as sentry from '@sentry/node'
import cors from 'cors'
import express, { Application } from 'express'
import { MongoClient, ServerApiVersion } from 'mongodb'
import passport from 'passport'
import ErrorHandler from './middleware/ErrorHandler'
import { declareRoutes } from './router/routes'
import Log from './tools/log/Log'
import configurePassport from './tools/security/Passport'

dotenv.config({ path: '.env' })

const PORT = process.env.PORT ?? 3000
const app: Application = express()

declareRoutes(app)

const client = new MongoClient(process.env.DB_URI as string, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

function startApp() {
    try {
    // First init Sentry
        sentry.setupExpressErrorHandler(app)

        // Then init middlewares
        configurePassport(passport)

        const corsOptions = {
            origin: '',
            methods: '',
            allowedHeaders: 'Content-Type',
        }

        app
            .use(cors(corsOptions))
            .use(passport.initialize())
            .use(ErrorHandler.httpErrorHandler)

        app.listen(PORT, () => {
            Log.info('application', `Running on port ${PORT}`)
        })
    } catch (error) {
        Log.error('application', 'Error starting application', error)
    }
}

async function connectDB() {
    try {
        await client.connect()
        await client.db().command({ ping: 1 })
        Log.info('database', 'MongoDB Connected')

    } catch (error) {
        await client.close()
        Log.error('database', 'MongoDB Connection', error)
    }
}

startApp()
connectDB()

const databases = {
    users: client.db('users'),
}

const collections = {
    accounts: databases.users.collection('accounts'),
}

export { collections }
