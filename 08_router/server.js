const http = require('http')

const Router = {}

function use(obj) {
  Object.assign(Router, obj)
}

function start() {
  http.createServer((req, res) => {
    const myURL = new URL(req.url, 'http://127.0.0.1/')
    // route(res, myURL.pathname)

    try {
      Router[myURL.pathname](req, res)
    } catch (error) {
      Router['/404'](req, res)
    }
  }).listen(3000, () => {
    console.log('server start')
  })
}

exports.start = start
exports.use = use