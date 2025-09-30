
// Falsy values

// false, 0, -0, "", null, undefined, NaN, BigInt 0n

// Truthy values

// "0", " ", "false", [], {}, function(){}

// const array=[]

// if(array.length===0){
//   console.log("array is empty")
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length==0){ // Object.keys(emptyObj)->this is array
//   console.log("Object is empty")
// }



// Nullish Coalescing Operator (??) // -> ye operator sirf null and undefined ko handle karne ke liye hai

// val will take the second value after ?? in case of null or undefined 
// In all other cases it will take the value before ?? (means first value)


let val;
// val= 5 ?? 10 // value of val=5

// val=null ?? 10 // value of val=10

// val=undefined ?? 10 // value of val=10

val=null ?? undefined // value of val=undefined

val=undefined ?? null // value of val=null

console.log(val)


// Ternary Operator

// condition ? true : false