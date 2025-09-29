// singleton
// Object.create

// object literals -> This file is about object literals

const mySym=Symbol("key1")

const JsUser={
  name:"Anmol",
  "full name": "Anmol Kumar Yadav", // we cannot acces this using JsUser.full name
  // mySym:"myKey1",  // this is wrong it is not using as symbol
  [mySym]:"myKey1",
  age:5,
  location:"Jaipur",
  email:"anmol@google.com",
  isLoggedIn:false,
  lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // we can access full name using this only
// console.log(JsUser[mySym]);

// JsUser.email="anmol@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email="anmolkumaryadav"
// console.log(JsUser)

JsUser.greeting=function(){
  console.log("Hello JS User")
}
JsUser.greetingTwo=function(){
  console.log(`Hello JS User ${this["full name"]}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())