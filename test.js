var test = require('tape')
var sbs = require('./index')

test('module mechanics', function (t) { 
  var out = sbs(10, {age: 5}, {age: 7}) 

  console.log(out)
  t.end()
})
