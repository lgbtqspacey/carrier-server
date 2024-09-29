import { NextFunction, Request } from 'express'
import Log from '../../tools/log/Log'
import ValidateUser from '../../tools/ValidateUser'
import { GeneralUserQuery } from '../../types/Query'

export default class GetUserService {
    public static readonly execute = (req: Request, next: NextFunction): GeneralUserQuery => {
        try {
            const params = {
                id: req.query.id,
                email: req.query.email
            }

            return ValidateUser(params, next)
        } catch (error) {
            Log.error('service', 'GetUserService', error)
            next(error)
        }
    }
}
