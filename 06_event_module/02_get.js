const http = require('http')
const https = require('https')
const EventEmitter = require('events')

let event = null
http.createServer((req, res) => {
  const urlobj = new URL(req.url, 'http://localhost:3000')

  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8',
    'access-control-allow-origin':'*'      // cors
  })

  switch(urlobj.pathname) {
    case '/api/aaa':
      event = new EventEmitter()
      event.on('play', data => {
        res.end(data)
      })

      // データをリクエストする
      httpget()
      break
    default:
      res.end('404 not found')
  }
}).listen(3000, () => {
  console.log('server start')
})

function httpget(cb) {
  let data = ''
  https.get('https://jsonplaceholder.typicode.com/photos', (res) => {
    res.on('data', chunk => {
      data += chunk
    })

    res.on('end', () => {
      // console.log(data)
      event.emit('play', data)
    })
  })
}