const fs = require('fs')

fs.appendFile('./avatar/a.txt', 'こんにちは', err => {
  console.log(err)
})