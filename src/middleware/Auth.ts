import { NextFunction, Request, Response } from 'express'
import CustomErrorMessage from '../enum/CustomErrorMessage'
import { BadRequest, Unauthorized } from '../tools/CustomError'
import Cipher from '../tools/security/Cipher'
import JWT from '../tools/security/JWT'

export default class Auth {
  public static readonly jwt = (req: Request, _res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(' ')[1]

      if (!token) {
        next(new BadRequest(CustomErrorMessage.AUTH_NOT_PROVIDED))
        next()
      } else {
        JWT.verify(token, next)
        next()
      }
    } catch (error) {
      next(error)
    }
  }

  public static readonly cron = (req: Request, _res: Response, next: NextFunction) => {
    try {
      const token = req.header('cron-token')

      if (!token) {
        next(new BadRequest(CustomErrorMessage.AUTH_NOT_PROVIDED))
        next()
      } else {
        const decodedToken = Cipher.decode(token, next)

        if (decodedToken === process.env.CRON_TOKEN) {
          next()
        } else {
          next(new Unauthorized(CustomErrorMessage.UNAUTHORIZED))
          next()
        }
      }
    } catch (error) {
      next(error)
    }
  }
}
