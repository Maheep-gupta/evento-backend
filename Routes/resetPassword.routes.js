const express = require('express')
const bodyParser = require('body-parser')
const cors=require('cors')
const ResetPassword = require('../controller/resetpassword.controller')
const VerifyEmail = require('../controller/verifyEmail.controller')
const VerifyOTP = require('../controller/verifyOTP.controller')
const resetPasswordRouter=express.Router()

resetPasswordRouter.use(bodyParser.urlencoded({ extended: false }))
resetPasswordRouter.use(bodyParser.json())

resetPasswordRouter.post('/resetPassword',cors(), ResetPassword) 
resetPasswordRouter.post('/verifyEmail',cors(), VerifyEmail) 
resetPasswordRouter.post('/verifyOTP',cors(), VerifyOTP) 

module.exports=resetPasswordRouter