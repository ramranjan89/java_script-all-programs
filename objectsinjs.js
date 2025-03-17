console.log("---------- objects in js---------");

let laptop= {
ram: 16,   // object define under  {} braces.
processor: "i9",   // always use comma(,) to separte property.
brand: "dell",      // property awlays should be have in key value pair
weight: 2.8
}
console.log(laptop);

let input= 'name';
let emp= {
name: "ramranjan ojha",
id: "ab23",
company: "rigi",
'login id': 9912   // another way to declare key value pair in object
}
console.log(emp.name); //to access the property we can use (.)
console.log(emp['id']); // another way to access the property of an object.
console.log(emp['login id']);  // through this method only user can access such declared property.
console.log("nested object\n");
console.log("--------------------------------------------------------\n");
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
empolye.vehicle= "Harley";
empolye.device.operatingsys= "windows";
console.log(empolye);
console.log(empolye.device);
//console.log(empolye.device.laptop.length); // nested object we call by (.) after that object name.



