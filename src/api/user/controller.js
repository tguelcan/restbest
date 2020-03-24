import { BadRequestError } from 'restify-errors'
import { merge } from 'lodash'
import model from './model'

export const create = async({ body }, res, next) => {
    // Pass values
    const { email, password } = body
    
    try {

        // Validate request body
        await model.validate({ email, password })
        
        // Create object
        const data = await model.create({ email, password })

        // Send response 
        res.send(201, data.modelProjection())

    } catch (error) {
        /* istanbul ignore next */ 
        return next(new BadRequestError(error))
    }
}

export const update = async({ user, params, body }, res, next) => {
    // Pass values
    const { name, picture, email } = body
    
    try {

        // Find User
        const result = await model.findById(params.id === 'me' ? user._id : params.id)

        const isAdmin = user.role === 'admin'
        const isSelfUpdate = params.id === 'me' ? true : (result._id.equals(user._id))

        // Check permissions
        if (!isSelfUpdate && !isAdmin) {
            /* istanbul ignore next */ 
            return next(new BadRequestError('You can\'t change other user\'s data'))
        }

        // Save user
        const data = await merge(result, { name, picture, email }).save()
        
        // Send response 
        res.send(201, data.modelProjection())

    } catch(error) {
        /* istanbul ignore next */ 
        return next(new BadRequestError(error))
    }
}


export const updatePassword = async ({ body , params, user }, res, next) => {
    // Pass values
    const { password } = body
    
    try {
        // Find User
        const result = await model.findById(params.id === 'me' ? user._id : params.id)

        // Check permissions
        if (!result._id.equals(user._id)) {
            /* istanbul ignore next */ 
            return next(new BadRequestError('You can\'t change other user\'s password'))
        }

        // result.password = password
        
        // Save user
        const data = await result.set({ password }).save()
        
        // Send response 
        res.send(201, data.modelProjection())

    } catch(error) {
        /* istanbul ignore next */ 
        return next(new BadRequestError(error))
    }
}
