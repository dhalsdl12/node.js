var sayNode = function(){
    console.log('Node')
}

var es = 'ES'
var oldobject = {
    sayJSL: function() {
        console.log('JS')
    },
    sayNode: sayNode,
}
oldobject[es + 6] = 'Fantastic'

console.log(oldobject)
oldobject.sayJSL()
oldobject.sayNode()
console.log(oldobject.ES6)

const newobject = {
    sayJS(){
        console.log('JS')
    },
    sayNode,
    [es + 6]: 'Fantastic'
}

newobject.sayJS()
newobject.sayNode()
console.log(newobject.ES6)