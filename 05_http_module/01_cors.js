const http = require('http')

http.createServer((req, res) => {
  const urlobj = new URL(req.url, 'http://localhost:3000')

  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8',
    'access-control-allow-origin':'*'      // cors
  })

  switch(urlobj.pathname) {
    case '/api/aaa':
      res.end(`${JSON.stringify({
        name: 'jerry',
        age: 100
      })}`)
      break
    default:
      res.end('404 not found')
  }
}).listen(3000, () => {
  console.log('server start')
})