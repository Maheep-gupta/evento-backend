const express=require('express')
const LoginRoutes = require('./Routes/login.routes')
const EventRoutes = require('./Routes/event.routes')
const resetPasswordRouter = require('./Routes/resetPassword.routes')
const app = express()
const db=require('./db/db.connection').DatabaseConnection()

app.use('/api/auth', LoginRoutes)
app.use('/api/event/', EventRoutes)
app.use('/api/update/', resetPasswordRouter)

const port = process.env.PORT || 5000
app.listen(port, (req,res) => {
    console.log('Server Chalu Ho gya hai ',port)
})