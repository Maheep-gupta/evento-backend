const express = require('express')
const bodyParser = require('body-parser')
const LoginUser = require('../controller/login.controller')
const CreateUserController = require('../controller/createUser.controller')
const cors=require('cors')
const CreateEvent = require('../controller/createEvent.controller')
const GetEvent = require('../controller/getEvent.controller')
const eventRouter=express.Router()

eventRouter.use(bodyParser.urlencoded({ extended: false }))
eventRouter.use(bodyParser.json())

eventRouter.get('/getEvent',cors(), GetEvent) 
eventRouter.post('/createEvent',cors(), CreateEvent) 

module.exports=eventRouter