const http = require('http')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("Hello this is a first program")
    res.end()
}).listen(5000)

module.exports = server