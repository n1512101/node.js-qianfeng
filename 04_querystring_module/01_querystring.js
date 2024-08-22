const querystring = require('querystring')

const str = 'name=kerwin&age=100&location=dalian'

const obj = querystring.parse(str)
console.log(obj)

const myobj = {
  a:1,
  b:2,
  c:3
}

const mystr = querystring.stringify(myobj)
console.log(mystr)