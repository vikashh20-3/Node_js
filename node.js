const math = require('./math');
// we can also do destructuring 
const {addFn,subFn} =require('./math');


console.log('hey there i\'m js ');
// console.log("the addfunction value is "+ math(2,3));
// console.log(math.addFn(4,5));
// console.log(math.subFn(4,5));
// console.log(subFunction(4,5));
// after destructuring we can directly use the function name of another file
// console.log(addFn(6,6))
// console.log(subFn(6,6))


// console.log(math);
console.log(math.add1(2,2));

