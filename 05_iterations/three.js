// For of

// ["", "", ""] // array
// [{}, {}, {}] // object

// const arr=[1, 2, 3, 4, 5]

// for (const i of arr) { // (For of) -> loop
//   console.log(i)
// }


// const greetings="Hello World!"

// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`)
// }


// Maps

const map=new Map()
map.set("IN", "India")
map.set('Fr', 'France')
map.set('UK', "United Kingdom")
map.set('UK', "United Kingdom")

// console.log(map)

for (const [key, value] of map) {
  // console.log(key, ":-", value) 
}


const myObj={
  'game1':"NSF",
  'game2':"spiderman"
}

for (const [key, value] of myOb) { // Object is not iteratable in this loop (for of)
  console.log(key, ":-", value)
}