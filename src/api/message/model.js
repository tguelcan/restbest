import mongoose, { Schema } from 'mongoose'

const messageSchema = new Schema({
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
})

export const modelProjection = function(req, item, cb) {
    const view = {}
    const fields = ['id', 'content']

    /*
    if (req.user) {
        fields = [...fields, 'createdAt']
    }
    */

    fields.forEach((field) => { view[field] = item[field] })

    cb(null, view)
}

export default mongoose.model('Message', messageSchema)