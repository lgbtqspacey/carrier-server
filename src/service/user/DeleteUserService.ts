import { NextFunction, Request } from 'express'
import { GeneralUserQuery } from '../../types/Query'
import Log from '../../tools/log/Log'
import ValidateUser from '../../tools/ValidateUser'

export default class DeleteUserService {
    public static readonly execute = (req: Request, next: NextFunction): GeneralUserQuery => {
        try {
            const params = {
                id: req.params.id
            }

            return ValidateUser(params, next)
        } catch (error) {
            Log.error('service', 'DeleteUserService', error)
            next(error)
        }
    }
}
