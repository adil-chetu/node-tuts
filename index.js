// const server = require('./http/index')
// const example1 = require('./http/example1')
// const example2 = require('./http/example2')
const { response } = require('express')
const express = require('express')
const app = express()
app.use(express.json())


app.get('/', function(req, res){
  console.log("GET Request Received")
  res.send('request update successfully.')
})

app.listen(5000)

app.post('/addcourse', function(req, res){
  console.log('Post request received.')
  res.send('post request has been done.')
})

app.delete('/delete', function(req, res){
  console.log('deleted successfully')
  res.send('Deleted successfully')
})


app.put('/update', function(req, res){
  console.log('updated successfully')
  res.send('udpated successsfylly')
})