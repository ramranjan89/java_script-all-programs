//reverse an array value and print one by one

let myArr= [2,3,4,5,6,7];  //lentgh of array is 6
let reversarr= [];
//total index in array is 5 which is one less then length of an array.
for(let i=myArr.length-1; i>=0; i--)
{
console.log(myArr[i]); //here index value is 5 at the start and at the index 5 value is 7
}
console.log(reversarr);