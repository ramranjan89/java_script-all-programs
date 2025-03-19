let myFstarr = [];
console.log(myFstarr);
let arr1 =[31,54,35,53,3,];   // 03 will be consider as 3
console.log(arr1);
console.log(arr1.length);
for(let i=0; i<arr1.length;i++)  //printing all arrye one by one.
	console.log(arr1[i]);
	
// there will be multiple data types can store in an Array:
let alltypes = ["dhoni", 7, {job: "cricketer"}, function(){
	console.log(` Dhoni is a ${alltypes[2].job} and his no ${alltypes[1]}`); //here we didn't use this bcoz this function ntbelong to that object.
}];
console.log(alltypes);

alltypes[3]();
console.log(alltypes[2].job);