var squall = require('./index')

squall({
  init: function () { console.log('init') },
  worker: function () { console.log('hi', process.pid); setTimeout(process.exit, 1000) },
  end: function () { console.log('end') }
})