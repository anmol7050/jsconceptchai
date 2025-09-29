let a=300
if(true){
  let a=10
  const b=20
  // console.log(a) // Gives ans 10
  // var c=30 //
}
// console.log(a); // Gives ans 300
// console.log(b);
// console.log(c); // This giving the value 30 instead of not defined globally. 
// This is the reason we will not use var at any cost in our future



function one(){
  const username="Anmol"
  function two(){
    const website="youtube"
    console.log(username)
  }
  console.log(website)
  two()
}
// one()


if(true){
  const username="Anmol"
  if(true){
    const website=" youtube"
    // console.log(username + website)
  }
  // console.log(website)
}
// console.log(username) 



// ******************************************* Interesting ***************************************************

console.log(addone(5)) // Gives value 6
function addone(num){
  return num+1
}
// console.log(addone(5)) // Gives value 6

// console.log(addTwo(5)) // Gives error cannot access addTwo before initialization (as we are declaring a varible)
const addTwo=function(num){ 
  return num+2
}
console.log(addTwo(5)) // Gives value 7

