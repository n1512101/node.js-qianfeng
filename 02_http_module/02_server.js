const http = require('http')
const moduleRenderHTML = require('./module/renderHTML')
const moduleRenderStatus = require('./module/renderStatus')

http.createServer((req, res) => {
  if(req.url === '/favicon.ico') return
  // console.log(req.url)

  res.writeHead(moduleRenderStatus.renderStatus(req.url), {"Content-Type": "text/html; charset=utf-8"})
  res.write(moduleRenderHTML.renderHTML(req.url))
  res.end()
}).listen(3000, () => {
  console.log('server start')
})

