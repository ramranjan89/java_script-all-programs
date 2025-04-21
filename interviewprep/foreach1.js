let numbers = [34, 343,4344,34,4,434];
var sum=0;
numbers.forEach((num, position, arr)=>
{

sum=num+sum;
console.log(position, arr);

});
console.log(sum);

let obj= 
{
regNo: 1223,
vehical: "honda"
}
convertedArr= Object.entries(obj);

convertedArr.forEach((convertedArr, indexvalue, completearray)=>
{
console.log(indexvalue, completearray);
}
)