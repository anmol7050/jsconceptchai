const user={
  username:"Anmol", 
  loginCount:8,
  signedIn: true,
  
  getUserDetails: function(){
    // console.log("Got user details from database")
    // console.log(`username: ${this.username}`)
    console.log(this)
  }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


// Till now we have discussed Object Literals

// Now we are going to discuss  Constructor Function


function User(username, loginCount, isLoggedIn){
  this.username=username
  this.loginCount=loginCount
  this.isLoggedIn=isLoggedIn

  this.greeting=function(){
    console.log(`Welcome ${this.username}`)
  }
  
  return this
}

const userOne= new User("Anmol", 12, true)
const userTwo= new User("ChaiAurCode", 11, false)
// console.log(userOne)
// console.log(userTwo)f
console.log(userOne.constructor)