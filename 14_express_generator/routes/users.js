var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.cookies)    // cookieをゲットする
  res.cookie('gender', 'male')  // cookieをセットする
  res.send({name: 'jerry'});
});

module.exports = router;
