import bcrypt from 'bcryptjs'
import { UnauthorizedError } from 'restify-errors'

export const validateUserBeforeCreate = () => (({ body }, res, next) => 
    (body?.role) ? next(new UnauthorizedError('Cannot create user with roles')) : next()
)

export const passwordValidator = {
    validator: function (password) {
        const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')
        return strongRegex.test(password)
    },
    message: () => 'The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)'
}

export const extractToken = (req) => {
    // Extract JWT from Header
    if (req.headers?.authorization?.split(' ')[0] === 'Bearer') 
        return req.headers.authorization.split(' ')[1]

    // Extract JWT from Query
    if (req.query?.token)
        return req.query.token

    // Extract JWT from Body
    if (req.body?.token)
        return req.body.token

    return null
}

export const hashPassword = async (password) => 
    await bcrypt.hash(password, 9)

export const comparePassword = async (password, comparePassword) => 
    await bcrypt.compareSync(password, comparePassword)
