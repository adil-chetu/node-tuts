const http = require('http')
var options = {
    host : "www.geeksforgeeks.org",
    path : "/courses",
    method : "GET"
}

const status = http.request(options, (resp) =>{
        console.log(`STATUS : ${resp.statusCode}`)
}).end()

module.exports = status