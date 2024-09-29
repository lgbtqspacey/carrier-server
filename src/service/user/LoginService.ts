import { NextFunction, Request } from 'express'
import Log from '../../tools/log/Log'
import ValidateUser from '../../tools/ValidateUser'
import { GeneralUserQuery } from '../../types/Query'

export default class LoginService {
    public static readonly execute = (req: Request, next: NextFunction): GeneralUserQuery => {
        try {
            const params = {
                email: req.query.email
            }

            return ValidateUser(params, next)
        } catch (error) {
            Log.error('service', 'LoginService', error)
            next(error)
        }
    }
}
