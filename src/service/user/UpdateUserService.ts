import { NextFunction, Request } from 'express'
import { userUpdate } from '../../schema/userSchema'
import { BadRequest } from '../../tools/CustomError'
import Log from '../../tools/log/Log'
import Password from '../../tools/security/Password'
import ValidateUser from '../../tools/ValidateUser'
import { UpdateUserQuery } from '../../types/Query'

export default class UpdateUserService {
    public static readonly execute = (req: Request, next: NextFunction): UpdateUserQuery => {
        try {
            let data: { $set: object } | null = { $set: {} }

            const params = {
                id: req.params.id
            }

            const filter = ValidateUser(params, next)

            if (filter) {
                data = this._buildData(req, next)
            }

            return { filter, data }
        } catch (error) {
            Log.error('service', 'UpdateUserService', error)
            next(error)
        }
    }

    private static readonly _buildData = (req: Request, next: NextFunction): { $set: object } => {
        const { error, value } = userUpdate.validate(req.body)
        const data: { $set: object } = { $set: {} }

        if (error) {
            const message = error.details[0].message
            next(new BadRequest(message))
            next()
        } else {
            value.updatedAt = new Date().toISOString()
            if (value.password) value.password = Password.encrypt(value.password)

            data.$set = value
        }

        return data
    }
}
