const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    collegeId: {
        type: Number,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    otp: {
        type: String,
        default:null
    },
    participatedEvents: {
        type: [{
            type: mongoose.Schema.Types.Mixed,
            ref:'events'
        }]
    }
},{
    timestamps: true,
  })
const userModal = mongoose.model('users', UserSchema)
module.exports=userModal