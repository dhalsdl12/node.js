// 사용할 변수들을 불러오면 된다.
const { odd, even } = require('./var')

function checkOddEVen(num){
    if (num%2){
        return odd
    }
    return even
}

module.exports = checkOddEVen