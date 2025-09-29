// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//   console.log(`DB CONNECTED`)
// }
// chai()

(function chai(){
  // named IIFE
  console.log(`DB CONNECTED`)
})(); // Here semi-colon is used to end this function(we have to do it manually by using ; after ())

// ( () =>{
//   console.log(`DB CONNECTED TWO`)
// })()

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`)
})("Anmol")