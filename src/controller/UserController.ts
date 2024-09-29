import { NextFunction, Request, Response } from 'express'
import { collections } from '../app'
import ErrorMessage from '../enum/ErrorMessage'
import HttpStatus from '../enum/HttpStatus'
import CreateUserService from '../service/user/CreateUserService'
import DeleteUserService from '../service/user/DeleteUserService'
import GetUserService from '../service/user/GetUserService'
import LoginService from '../service/user/LoginService'
import UpdateUserService from '../service/user/UpdateUserService'
import { BadRequest, NotFound } from '../tools/CustomError'
import Log from '../tools/log/Log'
import JWT from '../tools/security/JWT'
import { GeneralUserQuery, UpdateUserQuery } from '../types/Query'

export default class UserController {
    public static readonly createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const query: GeneralUserQuery = CreateUserService.execute(req, next)
            if (!query) return

            const result = await collections.accounts.insertOne(query)

            if (result) {
                const token = JWT.generate(result.insertedId.toString())

                res.status(HttpStatus.code.CREATED).send({
                    id: result.insertedId,
                    token: token
                })
            } else {
                next(new BadRequest(ErrorMessage.BAD_REQUEST))
                next()
            }

            Log.info('controller', 'UserController :: Calling Endpoint :: CreateUser')
        } catch (error) {
            Log.error('controller', 'UserController :: Calling Endpoint :: CreateUser', error)
            next(error)
        }
    }

    public static readonly getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const query: GeneralUserQuery = GetUserService.execute(req, next)
            if (!query) return

            const result = await collections.accounts.findOne(query, { projection: { password: 0 } })

            if (result) {
                res.status(HttpStatus.code.OK).send(result)
            } else {
                next(new NotFound(ErrorMessage.NOT_FOUND))
                next()
            }
            Log.info('controller', 'UserController :: Calling Endpoint :: GetUser')
        } catch (error) {
            Log.error('controller', 'UserController :: Calling Endpoint :: GetUser', error)
            next(error)
        }
    }

    public static readonly deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const query: GeneralUserQuery = DeleteUserService.execute(req, next)
            if (!query) return

            const result = await collections.accounts.deleteOne(query)

            if (result?.deletedCount) {
                res.status(HttpStatus.code.NO_CONTENT).send()
            } else {
                next(new NotFound(ErrorMessage.NOT_FOUND))
                next()
            }
            Log.info('controller', 'UserController :: Calling Endpoint :: DeleteUser')
        } catch (error) {
            Log.error('controller', 'UserController :: Calling Endpoint :: DeleteUser', error)
            next(error)
        }
    }

    public static readonly userLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const query: GeneralUserQuery = LoginService.execute(req, next)
            if (!query) return

            const user = await collections.accounts.findOne(query, { projection: { password: 1, _id: 1 } })

            if (!user) {
                next(new BadRequest(ErrorMessage.LOGIN_FAILED))
                next()
            } else {
                const token = JWT.generate(user._id.toString())
                res.status(HttpStatus.code.OK).send({ token: token })
                Log.info('controller', 'UserController :: Calling Endpoint :: Login')
            }
        } catch (error) {
            Log.error('controller', 'UserController :: Calling Endpoint :: Login', error)
            next(error)
        }
    }

    public static readonly updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const query: UpdateUserQuery = UpdateUserService.execute(req, next)
            if (!query?.filter || !query.data) return

            const result = await collections.accounts.findOneAndUpdate(
                query.filter,
                query.data,
                { returnDocument: 'after', projection: { password: 0 } }
            )

            if (result) {
                res.status(HttpStatus.code.OK).send(result)
            } else {
                next(new NotFound(ErrorMessage.NOT_FOUND))
                next()
            }

            Log.info('controller', 'UserController :: Calling Endpoint :: UpdateUser')
        } catch (error) {
            Log.error('controller', 'UserController :: Calling Endpoint :: UpdateUser', error)
            next(error)
        }
    }
}
