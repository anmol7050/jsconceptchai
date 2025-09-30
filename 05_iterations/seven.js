const myNumbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums=myNumbers.map( (num) => {return num+10})

// const newNums=myNumbers.map().map().filter() // Yaha per value pahle map ke baad return nahi hogi instead wo value second map me chali jayegi and then filter me. 
// Filter will get the map value not the array value 


const newNums=myNumbers
                      .map( (num) => num*10)
                      .map( (num) =>{return num+2}) // Ye map ko [10, 20, 30...] ye wali value milegi
                      .filter( (num) => {return num>50})
console.log(newNums)