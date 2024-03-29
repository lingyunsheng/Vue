
// 物理collection的model 映射
const mongoose = require('mongoose');
const md5 = require('md5');
const { Schema } = mongoose
const UserScheme = new Schema({
    role: {
        type: String,
        enum: ['superAdmin', 'admin', 'user'],
        default: 'user'
    },
    username: {
        type: String,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        set: md5
    },
    description: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        trim: true,
        default: ''
    }
}, {

        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        },
        toJSON: {
            transform(doc, ref) {
                ret.id=ret._id
                delete ret._id
                delete ret.password
            }
        },
        minimize: false

    })
Mongoose.model('User', UserScheme);