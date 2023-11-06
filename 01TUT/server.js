/* 
  Node.js vs Vfnilla Js

1) Node runs on a server
2) The console is terminal
3) global object instead of window obj
4) Common Core modules
5) Missing some JS API like fetch

  */

const os = require('os')
const path = require('path')
const { add, substact, multiply, divide } = require('./math')

console.log(add(2, 3))
console.log(substact(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

/*
console.log(os.type());
console.log(os.version());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
*/