 
 require('dotenv').config()

 const express = require('express')
 const app = express()
 const routes =  require('./routes/initRoutes.js');
 
 const cors = require('cors')
 
 app.use(cors())
 app.use(express.json())
 app.use(express.urlencoded({extended: false}))
 
 app.use('/api/sample',routes)
 
 const port = process.env.port || 3000
 const server = app.listen(port, console.log(`App listining in port ${port} - http://localhost:${port}`))
 
 module.exports = {app, server}
 
 // Path: routes/initRoutes.js
 const express = require('express')
 
 const router = express.Router()
 