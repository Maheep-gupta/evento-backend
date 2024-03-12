const mongoose = require('mongoose');
const hashingFunction = require('../Utils/HashPassword');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    collegeId: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        default: null
    },
    participatedEvents: [{
        type: mongoose.Schema.Types.Mixed,
        ref: 'events'
    }]
}, {
    timestamps: true,
});

UserSchema.pre('save', async function (next) {
    if (!(this.isModified('password'))) return next();
    try {
        this.password = await hashingFunction(this.password);
        next();
    } catch (error) {
        next(error)
    }
});


const userModal = mongoose.model('users', UserSchema);
module.exports = userModal;
