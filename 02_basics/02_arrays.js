const marvel_heros=["thor", "Ironman", "spiderman"]
const dc_heros=["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // array can take another array as a value(element in them)
// console.log(marvel_heros);
// console.log(marvel_heros[3])

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros);


// const allnewHeros=[...marvel_heros, ...dc_heros]
// console.log(allnewHeros);


// const anotherArr=[1, 2, 3, 4, [5, 6], 7, [8, 9, 10, [11, 12, [13, 14]]]]

// const realAnotherArr=anotherArr.flat(Infinity) // Infinity->depth upto which array elements are to be spread
// console.log(realAnotherArr)

console.log(Array.from("Anmol"))