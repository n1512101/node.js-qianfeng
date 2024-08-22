const http = require('http')
const https = require('https')

http.createServer((req, res) => {
  const urlobj = new URL(req.url, 'http://localhost:3000')

  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8',
    'access-control-allow-origin':'*'      // cors
  })

  switch(urlobj.pathname) {
    case '/api/aaa':
      // データをリクエストする
      httpget((data) => {
        res.end(data)
      })
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
      cb(data)
    })
  })
}