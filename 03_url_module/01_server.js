const http = require('http')
const url = require('url')
const moduleRenderHTML = require('./module/renderHTML')
const moduleRenderStatus = require('./module/renderStatus')

http.createServer((req, res) => {
  if(req.url === '/favicon.ico') return
  // console.log(url.parse(req.url))
  // console.log(url.parse(req.url).pathname)
  console.log(url.parse(req.url, true).query)

  const pathname = url.parse(req.url).pathname
  res.writeHead(moduleRenderStatus.renderStatus(pathname), {"Content-Type": "text/html; charset=utf-8"})
  res.write(moduleRenderHTML.renderHTML(pathname))
  res.end()
}).listen(3000, () => {
  console.log('server start')
})

