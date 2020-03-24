import { BadRequestError } from 'restify-errors'
import model from '@/api/user/model'
import { sign, decode } from '@/services/guard'
import { comparePassword } from '@/utils'

/**
 * @throws {BadRequestError} 400 Error - invalid email or password
 */
const errorHandler = (next) => 
    next(new BadRequestError('invalid email or password'))


export const authenticate = async({ body }, res, next) => {    
    // Pass values
    const { email, password } = body
    
    try {
        // Validate request body
        await model.validate({ email, password })
        
        // Find user
        const user = await model.findOne({ email })
        if(!user) 
            return errorHandler(next)
        
        // Compare password
        const comparedPassword = await comparePassword(password, user.password)
        if(!comparedPassword) 
            return errorHandler(next)

        // Sign in user
        const token = await sign(user)
        const { _id, role } = await decode(token)

        // Send response
        res.send({ _id, role, token })

    } catch(error) {
        return next(new BadRequestError(error))
    }
}
