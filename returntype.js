function multiobj()
{
console.log("object return type code block:\n");
return {name: "ram", rollno: 2};
}
let personInfo= multiobj();  //storeing the object return type in a variable.
console.log(personInfo.name);
console.log(personInfo.rollno);

function multiarry()
{
console.log("array return type code block:\n");
return [20,30];
}

let [a,b]= multiarry();  // Destructuring assignment
console.log(a);
console.log(b);