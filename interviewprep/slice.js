//use slice() to print 1st 3 element of an array:
let myaar= [1,2,3,4];
console.log(myaar.slice(0, 3));
//find a specific array from an index:
let num= [1,3,4,5,6,8]
console.log(num, "index of 6 is" , num.indexOf(6));

//check if a value exits in an array 
console.log(num.includes(6));  // this will give true all false if exits or not.
let addingArr= myaar+" "+num;
console.log(addingArr);