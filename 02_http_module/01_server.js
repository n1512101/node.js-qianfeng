const http = require('http')

http.createServer((req, res) => {
  // res.write('hello world.')
  // res.end()

  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
  res.write(`
    <html>
      <b>hello, world</b>
      <div>こんにちは</div>
    </html>
  `)
  res.end()
}).listen(3000, () => {
  console.log('server start')
})