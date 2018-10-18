#js-meter
it is an tool of measuring performance of time, CPU, RAM and heap of javascript code

[![NPM](https://nodei.co/npm/js-meter.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/js-meter)


## Install

```
$ npm install --save js-meter
```


## Usage
Initializing js-meter 
```js
const jm = require('js-meter')

const isPrint = true
const isKb = true       // or Mb
const m = new jm({isPrint, isKb})

for(var i=0; i<10000; i++){
    Math.random()
}

const meter = m.stop()
// RAM        :  1080 kb
// HeapTotal  :  1024 kb
// HeapUsed   :  -7.2265625 kb
// External   :  0 kb
// CPU        :  3.344 ms
// Spend time :  1004 ms
```


## License


[MIT](http://vjpr.mit-license.org)