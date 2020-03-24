import crypto from 'crypto'
import randtoken from 'rand-token'
import mongooseKeywords from 'mongoose-keywords'
import mongoose, { Schema } from 'mongoose'
import { isEmail } from 'validator'
import { BadRequestError } from 'restify-errors'

import { hashPassword, passwordValidator } from '@/utils'

const roles = ['user', 'admin']

const userSchema = new Schema({
    email: {
        type: String,
        validate: isEmail,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        validate: passwordValidator,
        minlength: 6
    },
    name: {
        type: String,
        index: true,
        trim: true
    },
    services: {
        facebook: String,
        github: String,
        google: String
    },
    role: {
        type: String,
        enum: roles,
        default: 'user'
    },
    picture: {
        type: String,
        trim: true
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
})

userSchema.path('email').set(function (email) {
    if (!this.picture || this.picture.indexOf('https://gravatar.com') === 0) {
        const hash = crypto.createHash('md5').update(email).digest('hex')
        this.picture = `https://gravatar.com/avatar/${hash}?d=identicon`
    }

    if (!this.name) {
        this.name = email.replace(/^(.+)@.+$/, '$1')
    }

    return email
})

userSchema.post('save', function (error, document, next) {
    next( error.code === 11000 
        ?   BadRequestError('This email already exist')
        :   error)
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()

    /* istanbul ignore next */
    try {
        this.password = await hashPassword(this.password)
        next()
    } catch(error) {
        next(error)
    }

})

export const modelProjection = function(req, item = this, cb) {
    let view = {}
    const fields = ['_id', 'name', 'email', 'picture', 'role']

    /*
     * If user logged or have speicific role.

    if (req.user?.role === 'admin') {
        fields = [...fields, 'createdAt']
    }

     */

    fields.forEach((field) => { view[field] = item[field] })


    /* 
     * If the projection calls from a array, you have a cb. Else return view
     */
    
    if(!cb)
        return view
    cb(null, view)
    
}

userSchema.statics = {
    roles,
    createFromService ({ service, id, email, name, picture }) {
        return this.findOne({ $or: [{ [`services.${service}`]: id }, { email }] }).then((user) => {
            if (user) {
                user.services[service] = id
                user.name = name
                user.picture = picture
                return user.save()
            } else {
                const password = randtoken.generate(32, 'aA1!&bB2§/cC3$(dD4%)')
                return this.create({ services: { [service]: id }, email, password, name, picture }).then(user => {
                    // TODO: Send welcome Mail
                    return user
                })
            }
        })
    }
}

userSchema.methods = {
    modelProjection
}

userSchema.plugin(mongooseKeywords, { paths: ['email', 'name'] })

export default mongoose.model('User', userSchema)