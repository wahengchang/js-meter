
const jm = require('./index.js')

const isPrint = true
const isMs = true       // or Second
const isKb = true       // or Mb

const m = new jm({isPrint, isMs, isKb})

for(var i=0; i<10000; i++){
    Math.random()
}

const meter = m.stop()

console.log('meter: ', meter)