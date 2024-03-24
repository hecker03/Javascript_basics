let user = {
    username : "SAK01",
    price : 2000,

    welcomemessage: function(){
        console.log(`Hello ${this.username} !,Welcome to the website`)
    }
}

// user.welcomemessage()
// user.username = "Sam"
// user.welcomemessage() // not hardcoded

// console.log(this); // global execution context - window object

// function code(){
//     console.log(this);
// }

// code()

// arrow functions
let chai = (num1, num2) => (num1 +num2) 

console.log(chai(3,4))
