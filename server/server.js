const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mongoClient = mongoose.mongoClient

const router = require('./router')

const app = express()
const port = process.env.PORT || 5003
const databaseName = 'demo'
const connectionString = `mongodb://localhost:27017/${databaseName}`

// connet mongodb
mongoose.connect(
  connectionString,
  function(err) {
    if (err) console.log(err.message)
  }
)

// mongoClient.connect(
//   connectionString,
//   { useNewUrlParser: true },
//   function(err, db) {
//     if (err) {
//       console.log(err.message)
//       throw err
//     }

//     console.log(`数据库${databaseName}已创建`)

//     var dbase = db.db('demo')
//     dbase.createCollection('order', function(){})
//   }
// );

app.all('*', function(req, res, next) {
  var orginList = [
    "http://localhost:8080"
  ]
  if (orginList.includes(req.headers.origin.toLowerCase())) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", req.headers.origin);
  }
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options') {
    res.send(200);  //让options尝试请求快速结束
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
