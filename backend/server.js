const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const PORT = 8080
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/api', require('./routes/crudRoutes'))

app.listen(PORT, () =>{
    console.log(`server started on  http://localhost:${PORT}`)
})
