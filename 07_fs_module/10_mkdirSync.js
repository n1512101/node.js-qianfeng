const fs = require('fs')

try {
  fs.mkdirSync('./avatar')
} catch (error) {
  console.log(error)
}