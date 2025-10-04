// let myName="Anmol     "
// let mychannel="chai    "

// console.log(myName.trueLength)


let myHeros=["thor", "spiderman"]

let   heroPower={
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`)
  }
}

Object.prototype.anmol=function(){
  console.log(`Anmol is present is all objects`)
}


Array.prototype.heyAnmol=function(){
  console.log(`Anmol says hello`)
}

// heroPower.anmol()
myHeros.anmol()
myHeros.heyAnmol()
// heroPower.heyAnmol()


// Inheritance

const User={
  name:'chai',
  email:'chai@google.com'
}

const Teacher={
  makeVideo:true
}

const TeachingSupport={
  isAvailable:false
}

const TASupport={
  makeAssignment: 'JS assignment',
  fullTime:true,
  __proto__: TeachingSupport
}


Teacher.__proto__=User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername="Anmol         "

String.prototype.trueLength=function(){
  console.log(`${this}`)
  console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()