// This mainly used in current context
// const user={
//   username:"Anmol",
//   price: 999,

//   welcomeMessage: function(){
//     // console.log(`${this.username}, welcome to website`)
//     // console.log(this)
//   }
// }

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this) // Gives empty as no global context 



// function chai(){
//   let username="Anmol"
//   console.log(this)
//   // console.log(this.username) // Gives undefined
// }
// chai()


// const chai=function(){
//   let username="Anmol"
//   console.log(this.username) // Gives undefined
// }
// chai()

const chai= () => {
  let username="Anmol"
  console.log(this.username)
}
// chai()


// const addTwo=(num1, num2)=>{ // Normal arrow function // Explicit means we have to return manually
//   return num1+num2
// }


// const addTwo=(num1, num2) => num1 + num2  // This is called implicit return 

// const addTwo=(num1, num2) => ( num1 + num2 ) 

const addTwo=(num1, num2) => ({username:"Anmol"})

console.log(addTwo(3, 4))