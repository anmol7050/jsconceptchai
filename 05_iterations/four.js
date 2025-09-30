const myObj={
  js:"javascript",
  cpp:"c++",
  rb:"ruby",
  swift:'swift by apple'
}

for (const key in myObj) { // For in loop is working for object
  // console.log(`${key} shortcut is for ${myObj[key]}`)
}


const myArr=[1, 2, 3, 4, 5]
for (const key in myArr) { // For in loop is working for array also
  // console.log(`${key} is for value ${myArr[key]}`)
}



// const map=new Map()
// map.set("IN", "India")
// map.set('Fr', 'France')
// map.set('UK', "United Kingdom")
// map.set('UK', "United Kingdom")


// for (const key in map) { // map is not iteratable in for in loop
//   console.log(key)
// }