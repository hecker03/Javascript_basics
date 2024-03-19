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

// console.log(jsuser.hi())
// console.log(jsuser.hi2())

let regular = {
    name : {
        firstname : "Shrishailya",
        lastname : "Keskar",
        username : "Sak"
    },
    email : "shree@goggle.com" 
}
// console.log(regular.name?.username);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 2: "D"}
let obj3 = {...obj1, ...obj2}

// another way - assign , by the module object 

let obj4 = Object.assign({},obj1, obj2) // returning a empty object to store all the values 

// console.log(obj4);

// destructuring
let Obj_ = {
    employeeid : 101,
    employeename : "Sam",
    Salary : 200000
}
const {employeename:Name} = Obj_
console.log(Name);