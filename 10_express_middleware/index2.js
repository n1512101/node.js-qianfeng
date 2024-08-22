const express = require('express')
const router = require('./router2/IndexRouter')

const app = express()

app.use(function(req, res, next) {
  console.log('token認証')
  next()
})

app.use('/api', router)

app.listen(3000, () => {
  console.log('server start')
})