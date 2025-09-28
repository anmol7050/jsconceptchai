// Two types

// Primitive

// Primitive are of 7 types
/*
string 
number
boolean
null
undefined
symbol
BigInt
*/

const score=100
const isLoggedIn=false
const outsideTemp=null
let userEmail; // (value here is undefined)


const id=Symbol("123")
const anotherId=Symbol("123")

// console.log(id===anotherId)

// Reference (Non Primitive)
// Array
// Objects
// Functions


const heroes=["shaktiman", "naagraj", "doga"];

let myObj={
  name: "anmol",
  age:5,
}

const myFunction=function(){
  console.log("Hello World");
}

// console.log(typeof myFunction) // function
// console.log(typeof myObj) // object
// console.log(typeof heroes) // object
// console.log(typeof null) // object
// console.log(typeof undefined) // undefined


// ************************************************** Stack And Heap Memory ************************************


// Stack(Primitive)->copy milta hai data ka                     Heap(Non-Primitive)->reference milta hai data ka
// stack->change copy me hota hai                               heap->change original data me hota hai

let myName="anmolKumarYadav"

let anotherName=myName

anotherName="ANMOL"

console.log(anotherName)
console.log(myName)

let userOne={
  email:"user@google.com",
  upi:"user@ibl",
}

let userTwo=userOne

userTwo.email="anmol@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)