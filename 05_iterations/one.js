// For loop

// for (let i = 0; i <=10; i++) {
//   const element = i
//   console.log(element)
  
// }


for (let i = 1; i <=20; i++) {
  // console.log(`Outer loop start here ${i}`)
  console.log(`Table of ${i} started`)
  for (let j = 1; j <=10; j++) {
    // console.log(`Inner loop value is ${j} and outer loop value is ${i}`)
    // Printing table 
    console.log(i+ '*' + j + '=' + i*j)
  }
  console.log(`Table of ${i} ended`)
}


// Break and continue -> I know them very well