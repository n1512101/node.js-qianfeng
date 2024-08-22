const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send({
    name: 'jerry',
    age: 100
  })
})

app.get('/login', (req, res) => {
  res.send('login page')
})

const func1 = (req, res, next) => {
  console.log('token認証')
  let isValid = true
  if (isValid) {
    res.kerwin = 'this is a pen'    // 次のコールバックに値を渡す
    next()
  } else {
    res.send('error')
  }
}

app.use(func1)

const func2 = (req, res) => {
  console.log(res.kerwin)
  res.send({list: [1,2,3]})
}

app.get('/home', [func2])

app.get('/list', (req, res) => {
  res.send('list')
})

/* 正規表現使える */
// app.get('/ab?cd', (req, res) => {
//   res.send('ok')
// })

app.get('/ab/:id', (req, res) => {
  res.send('ok')
})

app.listen(3000, () => {
  console.log('server start')
})