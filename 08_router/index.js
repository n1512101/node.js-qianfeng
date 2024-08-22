const server = require('./server')
const api = require('./api')
const route = require('./route')

server.use(api)
server.use(route)

server.start()