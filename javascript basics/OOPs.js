// Singleton
Object.create // constuctor
// object literals - 
const newObject = new Object
// or 
const n = {}
// symbols
let mysym = Symbol("key1")
const jsuser = {
    name : "Shrishailya",
    [mysym] : "mykey1",
    age : 18,
    email : "shri@gmail.com"
}
// console.log(jsuser.name)
// console.log(jsuser["email"])
// console.log(jsuser[mysym])
// console.log(typeof jsuser[mysym])
jsuser.age = 19 
// Object.freeze(jsuser)
jsuser.age = 18 
// console.log(jsuser)

jsuser.hi = function(){
    console.log("Hello jsusers ")
}
jsuser.hi2 = function(){
    console.log(`Hello , ${this.name}`);
}

console.log(jsuser.hi())
console.log(jsuser.hi2())
