const EventEmitter = require('events')

const event = new EventEmitter()

event.on('play', (data) => {
  console.log('event is called.', data)
})

event.emit('play', '11111')