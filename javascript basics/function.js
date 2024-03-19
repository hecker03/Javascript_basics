// Good Evening 
function add(a, b){
    let c = a + b
    return c;
}
c = add(2,3)
// console.log(c);

function login(user = "Sam"){
    if(!user){
        return 0;
    }
    return `${user} just logged in`
}
// console.log(login())

function handlemultiple(num1, num2,...num){
    console.log(num1, num2);
    return num
}
// console.log(handlemultiple(100,841,4861,93));

//How to handle objects in functions 
let obj = {
    username: "Sakshi",
    price : 0
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(obj)
handleobject({
    username : "Sam",
    price : "very much valuable"
})


// ways of declaring functions
hi() // this will not give you error
function hi(){
    return 1
}

// bye() // this will create an error
let bye = function(){
    return 2 
}
