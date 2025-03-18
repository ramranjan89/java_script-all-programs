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

//few other technique
function varlogic(num1, num2, num3)
{
return num1+num2+num3;
}
let allNo= varlogic(54,66);
console.log(allNo);// will get undefined/NaN as we didn't pass all 3 arugument in parameter
allNo=varlogic(3,4,5);
console.log(allNo); //this will gives reult 12 after sum up of all no.

function varlogic(num4, num5, num6=1)
{
return num4+num5+num6;
}
let myaddition= varlogic(6,7);
console.log(myaddition);  //14 will be output as num6=1 will provide default value 1 in case if we will not pass the value in param.
//if we will pass value then it will consider the given value in argument.
console.log(varlogic(10,20,30)); //here is the example
