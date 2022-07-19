const fs = require('fs');

fs.writeFileSync('read.txt','This is my text file i am learning node js here.')

fs.appendFileSync('read.txt', 'I am adding the extra text here.')

const data = fs.readFileSync('bio.txt', 'utf-8')
console.log(data)