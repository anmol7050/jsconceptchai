function sayMyName(){
  console.log("Anmol")
  console.log("Kumar")
  console.log("Yadav")
}
// sayMyName()

function addTwoNumbers(number1, number2){
  console.log(number1+number2)
}
// const result=addTwoNumbers(3, 4) // Here the function is not returning anything so the value of result is undefined
// console.log("result:", result)

function addTwoNumbers(number1, number2){
  // let result=number1+number2
  // return result
  return number1+number2
}
// const result=addTwoNumbers(3, 4)
// console.log("result:", result)

function loginUserMessage(username = "Anmol"){ // Here the value is default in case the username is not passed
  // if(username===undefined){
  //   console.log("Please enter a username")
  //   return
  // }
  if(!username){
    console.log("Please enter a username")
    return
  }
  return `${username} just logged in`
}
// console.log(loginUserMessage("Anmol"))
// console.log(loginUserMessage("Hitesh")) // If it is empty it will take the value as undefined




function calculateCartPrice(...num1){
  return num1
}
// console.log(calculateCartPrice(200, 300, 500, 2000))


const user={
  username:"Anmol",
  price: 999
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
// we can directly pass the object also (below)

handleObject({
  username:"Sam",
  price: 199
})


const myNewArr=[200, 400, 500, 2000]

function returnSecondValue(getArr){
  return getArr[1]
}
// console.log(returnSecondValue(myNewArr))

console.log(returnSecondValue([200, 400, 500]))