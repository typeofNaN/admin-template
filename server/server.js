const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mongoClient = mongoose.mongoClient

const router = require('./router')

const app = express()
const port = process.env.PORT || 5003
const databaseName = 'demo'
const connectionString = `mongodb://localhost:27017/${databaseName}`

mongoose.connect(
  connectionString,
  function(err) {
    if (err) console.log(err.message)
  }
)

app.all('*', function(req, res, next) {
  var orginList = [
    "http://localhost:8080"
  ]

  if (orginList.includes(req.headers.origin.toLowerCase())) {
    res.header("Access-Control-Allow-Origin", req.headers.origin)
  }

  res.header("Access-Control-Allow-Headers", "content-type")

  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
  if (req.method.toLowerCase() == 'options') {
    res.send(200)
  } else {
    next();
  }
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

app.listen(port, function() {
  console.log(`The server is listening on http://localhost:${port}`)
})
