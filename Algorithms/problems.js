// Problem #2 
// Works with "some" negative numbers, if a is ever negative it will fail bc loop will never run
function help(a,b) {
    let result = 0;
    for(let i = 0; i < a; i++) {
        result += b;
    }
    console.log(result);
}