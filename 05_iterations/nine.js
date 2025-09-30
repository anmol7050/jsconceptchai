const myNums=[1, 2, 3, 4, 5]

// const myTotal=myNums.reduce(function (acc, currVal) { // This is using Normal function
//   console.log(`value of acc: ${acc} and value of curr ${currVal}`)
//   return acc + currVal
// }, 0)

// console.log(myTotal)


// const myTotal=myNums.reduce( (acc, currVal) => (acc + currVal), 0)//((acc, currVal)=>acc+currVal, 0)also work
// console.log(myTotal)




const shoppingCart=[
  {
    itemName:"js course",
    price: 2999
  },
  {
    itemName:"py course",
    price: 999
  },
  {
    itemName:"mobile dev course",
    price:5999
  },
  {
    itemName:"data science course",
    price:12999
  }
]

const myTotal=shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(myTotal)
