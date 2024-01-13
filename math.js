function addFunction(value1,value2){
    return value1+value2;
};

function subFunction(value1,value2){
    return value1-value2
}

// module.exports='vikash';
// module.exports=addFunction;
// module.exports={
//     addFn: addFunction,
//     subFn: subFunction,
// };
// we can also export them without the key value like this 
// module.exports={
//     addFunction,
//     subFunction,
// };


//another way to export function
exports.add1=(a,b)=>a+b;
exports.sub1=(a,b)=>a-b;