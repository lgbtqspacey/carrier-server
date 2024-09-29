import joi from 'joi'

const userQueryParams = joi.object({
    id: joi.string().guid({ version: 'uuidv4' }),
    email: joi.string().lowercase().email(),
    token: joi.string().length(8).alphanum(),
    isEmailValidation: joi.boolean().default(false)
}).or('id', 'email').required()

const userCreate = joi.object({
    name: joi.string().min(2).max(32).required(),
    email: joi.string().lowercase().email().required(),
    password: joi.string().min(8).max(64).required(),
})

const userUpdate = joi.object({
    name: joi.string().min(2).max(32),
    email: joi.string().lowercase().email(),
    password: joi.string().min(8).max(64),
}).or('name', 'email', 'password').required()

export { userCreate, userUpdate, userQueryParams }
