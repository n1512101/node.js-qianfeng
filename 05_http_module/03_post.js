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
      // データをpostする
      httppost((data) => {
        res.end(data)
      })
      break
    default:
      res.end('404 not found')
  }
}).listen(3000, () => {
  console.log('server start')
})

function httppost(cb) {
  let data = ''

  const options = {
    hostname: 'm.xiaomiyoupin.com',
    port: '443',
    path: '/mtop/market/search/placeHolder',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const req = https.request(options, (res) => {
    res.on('data', chunk => {
      data += chunk
    })

    res.on('end', () => {
      cb(data)
    })
  })
  req.write(JSON.stringify([{}, {baseParam: {ypClient: 1}}]))
  req.end()
}