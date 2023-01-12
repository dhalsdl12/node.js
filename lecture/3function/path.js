const path = require('path')

console.log(path.dirname(__filename))
console.log(path.extname(__filename))
console.log(path.basename(__filename))

console.log(path.parse(__filename))

console.log(path.format({
    root: 'C:\\',
    dir: 'C:\\Users\\dhals\\OneDrive\\바탕 화면\\github\\node.js\\lecture\\3function',      
    base: 'path.js',
    ext: '.js',
    name: 'path'
  }))

console.log(path.normalize('c://\\'))
console.log(path.isAbsolute('c://'))
console.log(path.relative('C:\\', 'C:\\'))

path.join(__dirname, '..', '..', '/user')
path.resolve(__dirname, '..', '..', '/user')