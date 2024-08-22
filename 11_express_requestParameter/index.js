const express = require('express')
const homeRouter = require('./route/homeRouter')
const loginRouter = require('./route/loginRouter')

const app = express()

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