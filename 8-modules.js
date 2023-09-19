// Modules - Encapsulated code (only share minimum)
// CommonJS - EVERY FILE IN NODE IS A MODULE (BY DEFAULT)

const names = require('./4-names') //Object
const sayHi = require('./5-utils') //Function
const data = require('./6-altflavor')
console.log(data)
require('./7-mindgrenade')

sayHi("Susan");
sayHi(names.john); 
sayHi(names.peter);
//Accessing elements of object names

