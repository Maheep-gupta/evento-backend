const express = require('express')
const bodyParser = require('body-parser')
const LoginUser = require('../controller/login.controller')
const CreateUserController = require('../controller/createUser.controller')
const cors=require('cors')
const loginRouter=express.Router()

loginRouter.use(bodyParser.urlencoded({ extended: false }))
loginRouter.use(bodyParser.json())

loginRouter.post('/login',cors(), LoginUser) 
loginRouter.post('/signup',cors(), CreateUserController) 

module.exports=loginRouter