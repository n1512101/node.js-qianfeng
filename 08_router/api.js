function render(res, data, type) {
  res.writeHead(200, {'Content-Type': type ? type : 'application/json; charset=utf-8'})
  res.write(data)
  res.end()
}

const apiRouter = {
  '/api/login': (req, res) => {
    const myURL = new URL(req.url, 'http://127.0.0.1')
    // console.log(myURL.searchParams)

    if (myURL.searchParams.get('username') === 'kerwin' && myURL.searchParams.get('password') === '123456') {
      render(res, `{"ok": 1}`)
    } else {
      render(res, `{"ok": 0}`)
    }
  },
  '/api/loginpost': (req, res) => {
    let post = ''
    req.on('data', chunk => {
      post += chunk
    })
    req.on('end', () => {
      post = JSON.parse(post)
      if(post.username === 'kerwin' && post.password === '123456') {
        render(res, `{'ok': 1}`)
      } else {
        render(res, `{'ok': 0}`)
      }
    })
  }
}

module.exports = apiRouter