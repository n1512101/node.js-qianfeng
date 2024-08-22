const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  // res.render('login')  // viewsフォルダ以下のlogin.ejsを探す
  res.render('login', {title: '1111111'})
})

router.post('/', (req, res) => {
  if (req.body.username === 'kerwin' && req.body.password === '123456') {
    console.log('success login')
    res.redirect('/home')
  } else {
    console.log('fail login')
    res.render('login', {title: '1111111'})
  }
})

module.exports = router