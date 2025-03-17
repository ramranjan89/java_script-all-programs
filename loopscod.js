console.log("---------- beenfites of loops---------");

let num = 676827;
let reverse = 0;
while(num>0)
{
 let num1= num % 10;
reverse = reverse *10 + num1;
num = parseInt(num/10);
}
console.log(`my reverse no of original 676827 is ${reverse}`);
