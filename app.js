// PACKAGE.JSON file store important info regarding project/package
// To create this file use npm init -y command
// To install a local dependency use npm i <packageName>
//All dependencies are stored in node_modules package

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)




