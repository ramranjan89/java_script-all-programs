const date= new Date();
console.log(date);
console.log(date.getFullYear());
//create 2 variable and print 1st name and last name and concat them.
let fname= "ram ranjan";
let lname= "ojha";
console.log(`${fname} ${lname}`);
console.log(fname+ " "+ lname);
//console an error with a message:
console.error("this is error message");
//log the square of a no and print that.
let anum= 10;
anum*= anum;
console.log(anum)
//print a value which holding true value
let value= 7;
let type= true;
console.log(Boolean(value), typeof type);
//create a varibale which is holding your age and greater then 18:
let age=19;
console.log(age>18);
//or we can try another method:
if(age>18)
console.log(`my age is ${age} and greater then 18`);
else
console.log("you are under age");
console.log(100/0);
//store PI in const varibale and print
const PI =3.14;
console.log(PI);
const pi= Math.PI;
console.log(pi);
console.log(typeof null);
console.log(typeof NaN);
let a= "string", b= 12, c=true, d=NaN;
console.log(a,b,c,d);

//declare a varibale without assignee and log it's type:
let ab;
var bc;
console.log(ab,bc, typeof ab, typeof bc);