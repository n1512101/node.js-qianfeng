const express = require('express')
const homeRouter = require('./route/homeRouter')
const loginRouter = require('./route/loginRouter')

const app = express()

// ejsを使えるようにする
app.set('views', './views')
app.set('view engine', 'ejs')

// 静的フォルダとする(複数定義できる)
app.use(express.static('public'))           // http:localhost:3000/home.html
app.use('/path', express.static('static'))  // http:localhost:3000/path/list.html

// postのパラメータを解析する (username=jerry&password=123456)
app.use(express.urlencoded({extended: false}))
// postのパラメータを解析する ({name: 'jerry', age: 100})
app.use(express.json())

app.use(function(req, res, next) {
  console.log('token認証')
  next()
})

app.use('/home', homeRouter)
app.use('/login', loginRouter)

// 404のときのミドルウェア(最後に置く)
app.use((req, res) => {
  res.status(404).send('not found')
})

app.listen(3000, () => {
  console.log('server start')
})