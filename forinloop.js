let empolye ={
namee: 'ramranjan',
empId: 23,
address: 'hsr layout',
device:{               // here created object under object and assignee the property of the object
laptop: 'dell',
mobile: 'MI',
usb: 'cable'
}
}
empolye.email= "ram@rigi.club";  //adding a new object property in empolye.

for(let key in empolye)
{
console.log(key);
console.log(` ${key} = ${empolye[key]}`);
}
// to print or access the nested object value.
for(let key in empolye.device)
{
//console.log(key);
console.log(` ${key} = ${empolye.device[key]}`);
}
