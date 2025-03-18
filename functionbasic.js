function basic()
{
console.log(" basic function block");
}
basic();

function returnFun()
{
return "hello ram this is return type function";
}
console.log(returnFun()); // I am calling and priting the return value.


function parafun(name)
{
console.log(name); // just to understand the code flow.
return ` my name is ${name}`
}

console.log(parafun()); //this will give undefined as there is no value in name.
// to resolve this we will 1st store in a variable and pass the argument in parameter.
let myName= parafun("ram");
console.log(myName);