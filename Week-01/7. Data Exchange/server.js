const nodes=require('./nodes')
console.log("hello this is server file")

var name=nodes.name
var age=nodes.age
var result=nodes.addNumber(age+18, 25)
console.log(name," and your age = "+age)

console.log("Final Result "+result)