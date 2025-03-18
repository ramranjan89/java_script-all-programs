let add=function(num1, num2)  // a ananoumous function without name assigning to a variable which is add.
{
return num1+num2;
}

let value= add(5,10);
console.log(value);  //output: 15
//again we are assigning a function variable to a variable:
let addnum=add();
console.log(addnum);  //NaN
