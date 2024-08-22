const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  const list = ['aaa', 'bbb', 'ccc', 'ddd']
  const myhtml = '<b>私は太い</b>'
  res.render('home', {list: list, myhtml: myhtml})
})

router.get('/list', (req, res) => {
  res.send(['111', '222', '333'])
})

router.get('/swiper', (req, res) => {
  res.send('home-swiper')
})

module.exports = router