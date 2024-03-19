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
console.log(login())