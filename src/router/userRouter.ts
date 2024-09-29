import express from 'express'
import UserController from '../controller/UserController'
import Auth from '../middleware/Auth'
import RateLimiter from '../middleware/RateLimiter'

const userRouter = express.Router()

userRouter
    .post(
        '/api/user',
        RateLimiter.unauthenticated,
        UserController.createUser,
        userRouter
    )

    .get(
        '/api/user',
        Auth.jwt,
        RateLimiter.authenticated,
        UserController.getUser,
        userRouter
    )

    .delete(
        '/api/user/:id',
        Auth.jwt,
        RateLimiter.authenticated,
        UserController.deleteUser,
        userRouter
    )

    .post(
        '/api/auth/login',
        RateLimiter.unauthenticated,
        UserController.userLogin,
        userRouter
    )

    .patch(
        '/api/user/:id',
        Auth.jwt,
        RateLimiter.authenticated,
        UserController.updateUser,
        userRouter
    )


export { userRouter }
