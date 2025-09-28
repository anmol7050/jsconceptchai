// Array

const myArr=[0, 1, 2, 3, 4, 5]

// const myHeros=["shaktiman", "naagraj"]

// const myArr2=new Array(2, 4, 7, 8, 10)
// console.log(myArr2);
// console.log(myArr[3])
// console.log(myHeros[0])

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9) // push the element at the zeroth index
// myArr.shift() // pop the element from the zeroth index

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr=myArr.join()
// console.log(myArr)
// console.log(newArr);
// console.log(typeof myArr); // object 
// console.log(typeof newArr); // string


// slice and splice
// slice->array ko change nahi karta hai 
// splice->array ko hi change kar deta hai (array me se element nikal deta hai so array chota ho jata hai)

console.log("A", myArr);

const mynewarr1=myArr.slice(1, 3)

console.log(mynewarr1)
console.log("B", myArr)

const mynewarr2=myArr.splice(1, 3)
console.log(mynewarr2)
console.log("C", myArr)