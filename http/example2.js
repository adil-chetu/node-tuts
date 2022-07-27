const http = require('http')
var agent = new http.Agent({ keepAlive: true, maxSockets: 0, maxSockets: 5})
var createConnection = agent.createConnection
const example2 = console.log(createConnection)
module.exports = example2