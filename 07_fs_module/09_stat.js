const fs = require('fs')

fs.stat('./avatar', (err, data) => {
  console.log(data)
  console.log(data.isFile())
  console.log(data.isDirectory())
})