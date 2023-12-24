const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
const errorHandler = require('./midleware/error_handler')
const morgan = require('morgan')
const path = require('path')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/assets',express.static(path.join(__dirname,'assets')))

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})