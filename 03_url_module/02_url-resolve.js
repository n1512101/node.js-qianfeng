const url = require('url')

const a = url.resolve('/one/two/three', 'four')
console.log(a)

const b = url.resolve('/one/two/three/', 'four')
console.log(b)