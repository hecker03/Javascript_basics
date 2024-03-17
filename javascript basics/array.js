let arr = [0, 1, 2, 3, 4, 5]
// console.log(arr.slice(1,4))
// console.log(arr.splice(1,4))
// console.log(arr)
let marvel = ["Ironman", "Thor", "Captain America"]
let dc = ["Batman", "Wonder Women", "Superman"]
// console.log(marvel.push(dc)) // It returns the position of the next element in the array
// marvel.push(dc)
// console.log(marvel) // array in an another array
let all_ = marvel.concat(dc) // returns another array 
// console.log(all_) 
// another method  : - 
let all = [...marvel, ...dc]
// console.log(all)

// to open any enclosed array 
let hi = [0, 1, 2, [3, 4, 5, [6, 7], 8], 9]
let open = hi.flat(1)
// console.log(open)

