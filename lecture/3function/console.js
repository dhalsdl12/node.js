const string = 'abc'
const number = 1
const boolean = true
const obj = {
    outside : {
        inside : {
            key : 'value',
        },
    },
}

console.time('전체 시간')
console.log('평범한 로그입니다')
console.log(string, number, boolean)
console.error('error message is in console.error')

console.dir(obj, {colors: true, depth: 2})
console.dir(obj, {colors: false, depth: 1})
console.time('for time')
for (let i = 0; i < 100000; i++){
    continue
}
console.timeEnd('for time')

function b() {
    console.trace('에러 위치 추적')
}
function a(){
    b()
}
a()
console.timeEnd('전체 시간')