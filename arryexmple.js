let arr1 = [3, 54, 35, 53, 3];  // Removed the leading zero from '03'
console.log(arr1);
console.log(arr1.length);
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

let alltypes = ["dhoni", 7, {job: "cricketer"}, function(){
    console.log(`Dhoni is a ${alltypes[2].job} and his number is ${alltypes[1]}`);
}];
console.log(alltypes);

alltypes[3]();

//other ways to create an array:
let newar =new Array();
//This creates a new empty array named newar using the Array constructor in JavaScript.
//new Array() initializes an empty array, equivalent to let newar = [];.
newar.push("sachin"); //add or push a value to the end of the array.
newar.push("virat");
newar.push("sehwag");
console.log(newar);
newar.push(true);
newar.push({occupation: "cricket"});
console.log(newar);
newar.push(function(){console.log("this is a function block")});
console.log(newar);
//directassignee to index
newar[7]= "IPL";
newar[8]= 20;
console.log(newar[8], newar[7]);
newar.unshift("pushing to the begnening of the array");
console.log(newar);
newar.pop();    //removed the data from the last index.
console.log(newar);
newar.shift();    //remove the 1st element of 0th index from an array.
console.log(newar);
newar.splice(2,1 ,"ram", true); //this wwill remove elemnt from index 2 and just 1 elemt after.
//ram and true same time adding value. 
console.log(newar);
//output'sachin',
 // 'virat',
 // true,
 // { occupation: 'cricket' },
 // [Function (anonymous)],
 // <1 empty item>,
 // 'IPL'

console.log(newar.length); //getting arrey length
//now using for of loop will print all data one by one.
for(let alldata of newar)
{
console.log(alldata);
}
//we can also use for in loop.