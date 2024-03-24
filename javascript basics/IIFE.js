// Immediately invoked  function expression  IIFE
(function chaiaurcode(){
    console.log("HELLO");
})(); // SEMICOLON TO END THE EXECUTION ELSE IT WILL GIVE AN ERROR

((name) => {
    console.log(`Hello ${name}`);
})("Shrishailya")
 // no need to call the function sepreatly to avoid the global pollution
 