const express = require('express')
const bodyParser = require('body-parser')
const cors=require('cors')
const ForgetPasswordController = require('../controller/ForgetPasswordController')
const VerifyOtpController = require('../controller/VerifyOtpController')
const ResetPasswordController = require('../controller/ResetPasswordController')
const resetPasswordRouter=express.Router()

resetPasswordRouter.use(bodyParser.urlencoded({ extended: false }))
resetPasswordRouter.use(bodyParser.json())

resetPasswordRouter.post('/verifyEmail',cors(), ForgetPasswordController) 
resetPasswordRouter.post('/verifyOTP',cors(), VerifyOtpController) 
resetPasswordRouter.post('/resetPasword',cors(), ResetPasswordController) 

module.exports=resetPasswordRouter