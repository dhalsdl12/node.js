const { odd, even } = require('./var')
const checknumber = require('./func')

function checkstring(str){
    if (str.length % 20){
        return odd
    } 
    return even
}

console.log(checknumber(10))
console.log(checkstring('hello'))