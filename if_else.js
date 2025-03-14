console.log("----------------conditinal state if else------\n");
let a=12;
let b=11;
let c=15;

 if(a>b&& a>c)
{
console.log ("yes the greated no is A" + " " + a);
}
else if(b>c&& b>a)
{
console.log("yes the greated no is B" + " " + b);
}
else
{
console.log("yes the greated no is C" + " " + c);
}
console.log("if else and also else of case");


let myNo= 4;
let value= myNo%2;
 if(value===0)
{
  console.log(" reminder is zero, the even no is" + " "+ myNo);
}
else
{
console.log("given no is a odd number which is" + " "+ myNo);
}

console.log("----------------ternary operator example-------------------\n");
let randomNo= 8;

let result = randomNo%2;

result = result==0?"given no is evenNo" : "given no is oddNo"
console.log(result);
console.log("after edit this trying to push 1st time on git hub");