const express = require('express')
const homeRouter = require('./router3/homeRouter')
const loginRouter = require('./router3/loginRouter')

const app = express()

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