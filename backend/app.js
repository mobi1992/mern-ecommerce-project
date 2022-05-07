const express = require('express')
require('./db/mongoose')
const app = express()
const productRouter = require('./routes/productRoute')
const categoryRouter = require('./routes/categoryRoute')
const userRouter = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const errorMiddleware = require('./middleware/error')
const cartRoute = require('./routes/cartRoute')
// to parse the json so that it can become an object
app.use(express.json())

//Handling uncaught exception
process.on('uncaughtException', err => {
    console.log(`Error : ${err.message}`)
    console.log('Shutting down the server because of uncaught error')
    process.exit(1)
})
app.use(productRouter)
app.use(categoryRouter)
app.use(userRouter)
app.use(adminRoute)
app.use(cartRoute)
app.use(errorMiddleware)
const server = app.listen(process.env.PORT, () => {
    console.log('Server is up on the port : ', process.env.PORT)
})
//console.log(fg)
// unhandled promise rejection, this type of error can occur when database url might be wrong
process.on('unhandledRejection', (err) => {
    console.log(`Error : ${err.message}`)
    console.log('Shutting down the server because of unhandled promise rejection')
    server.close(() => {
        process.exit(1)
    })
})