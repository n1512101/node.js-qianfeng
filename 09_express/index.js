const express = require('express')

const app = express()

app.get('/', (req, res) => {
  // res.send(`
  //     <html>
  //       <h1>hello world</h1>
  //     </html>
  //   `)

  res.send({
    name: 'jerry',
    age: 100
  })
})

app.get('/login', (req, res) => {
  res.send('login page')
})

// app.get('/home', (req, res, next) => {
//   console.log('token認証')
//   let isValid = false
//   if (isValid) {
//     next()
//   } else {
//     res.send('error')
//   }
// }, (req, res) => {
//   res.send({list: [1,2,3]})
// })

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

const func2 = (req, res) => {
  console.log(res.kerwin)
  res.send({list: [1,2,3]})
}

app.get('/home', [func1, func2])

app.get('/list', func1, (req, res) => {
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