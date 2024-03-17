// Singleton
Object.create // constuctor
// object literals - 

// symbols
let mysym = Symbol("key1")
const jsuser = {
    name : "Shrishailya",
    [mysym] : "mykey1",
    age : 18,
    email : "shri@gmail.com"
}
console.log(jsuser.name)
console.log(jsuser["email"])
console.log(jsuser[mysym])
console.log(typeof jsuser[mysym])