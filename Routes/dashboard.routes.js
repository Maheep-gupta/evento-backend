const express = require('express')
const bodyParser = require('body-parser')
const cors=require('cors')
const Dashboard = require('../controller/dashboard.controller')
const dashboardRouter=express.Router()

dashboardRouter.use(bodyParser.urlencoded({ extended: false }))
dashboardRouter.use(bodyParser.json())

dashboardRouter.get('/stats',cors(), Dashboard)

module.exports=dashboardRouter