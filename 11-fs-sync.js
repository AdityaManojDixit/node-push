// const {readFileSync,writeFileSync} = require('fs');

const fs = require('fs')
const first = fs.readFileSync('./content/first.txt', 'utf-8')
const second = fs.readFileSync('./content/second.txt', 'utf-8')

// console.log(first,second)

fs.writeFileSync('./content/third.txt', `Here is the result: ${first}, ${second}`, {flag : 'a'})

//{Flag:'a'} To append the existing file
