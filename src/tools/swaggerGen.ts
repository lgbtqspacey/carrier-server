import swaggerAutogen from 'swagger-autogen'
import { name, version, description} from '../../package.json'
import { } from '../router/userRouter'

const options = {
    info: {
        version: version,
        title: name,
        description: description,
    },
    host: 'localhost:3000',
    basePath: '/',
    schemes: ['https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'User',
            description: 'User related end-points',
        },
    ],
    securityDefinitions: {
        Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
        },
    },
    definitions: {
        User: {
            id: 'User',
            type: 'object',
            properties: {
                _id: {
                    type: 'string',
                    format: 'uuid',
                },
                name: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                    format: 'email',
                },
                createdAt: {
                    type: 'string',
                    format: 'date-time',
                },
                updatedAt: {
                    type: 'string',
                    format: 'date-time',
                },
            },
        },
    },
}

const outputFile = '../router/swagger.json'
const routesFiles = [
    '../router/userRouter.ts',
]

swaggerAutogen(outputFile, routesFiles, options)
