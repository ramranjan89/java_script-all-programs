//3*3 grid with acending no:
let acndvariable=1;
for(let i=1; i<=3;i++)
{
let str= "";//empty string
for(let j=1; j<=3;j++)
{
str+= `${acndvariable} `; //1 , 2, 3, 4, 5, 6, 8 ,9
acndvariable++;  //2, 3 ,4, 5, 6, 7, 8, 9
}
console.log(str);   //1st loop will give 1, 2, 3
}                   // 2nd loop after end wwill give 4, 5, 6
                    // 3rd loop will give 7, 8, 9