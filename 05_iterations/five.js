const coding=["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function  (item) { // Normal function
//   console.log(item)
// })


// coding.forEach( (item) => { // Arrow function -> () => {}
//   console.log(item)
// })


// function printMe(item){
//   console.log(item)
// }

// coding.forEach(printMe)



// coding.forEach( (item, index, arr) => {
//   console.log(item, index, arr)
// })


// we are dealing with arr of objects -> [{}, {}, {}] like this

const myCoding=[
  {
    languageName:"javascript",
    languageFile:"js"
  },
  {
    languageName:"java",
    languageFile:"java"
  },
  {
    languageName:"python",
    languageFile:"py"
  }
]

myCoding.forEach( (item)=>{
   console.log(item.languageName) // This is how we get item element from the array of items
  // console.log(item.languageFile) // This is how we get item element from the array of items
  // console.log(`${item.languageFile} is the file for this ${item.languageName}`)
  // console.log(item) // This is how we get each item from array
})