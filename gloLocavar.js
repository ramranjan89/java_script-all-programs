let globalvar= "Qa automation";

function localvar(local)
{
let num1= 23;
let globalvar= "manual testing"; //shadow the global varibale if same variable name and print local varibale value
console.log(globalvar);
console.log(num1);
return local;
}
//console.log(local);//this is local variable as declared inside function
console.log(globalvar);
//console.log(num1); //error num1 is not defined
localvar();