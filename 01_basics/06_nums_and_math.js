const score=400

const balance=new Number(100)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber=123.8966

// console.log(otherNumber.toPrecision(3));

const hundreds=1000000
// console.log(hundreds.toLocaleString());



// ****************************************************** Maths ***********************************************


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 9));
// console.log(Math.max(4, 3, 6, 9));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+1);

// If we have to strict our to value to a given range(min, max)

const min=100
const max=200


console.log(Math.floor(Math.random()*(max - min+1)) +min)      

// This I have to keep in mind