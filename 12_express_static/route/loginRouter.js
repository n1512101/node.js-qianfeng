const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.query)
  res.send('login-success')
})

router.post('/', (req, res) => {
  // console.log(req.body)
  const {username, password} = req.body
  if (username === 'kerwin' && password === '123') {
    res.send({ok: 1})
  } else {
    res.send({ok: 0})
  }

})

module.exports = router