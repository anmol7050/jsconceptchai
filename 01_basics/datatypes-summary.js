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

console.log(id===anotherId)

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

console.log(typeof myFunction) // function
console.log(typeof myObj) // object
console.log(typeof heroes) // object
console.log(typeof null) // object
console.log(typeof undefined) // undefined

