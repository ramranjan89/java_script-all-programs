const property= "first name";
const userName= "ram ranjan ojha";
let student=
{
[property]: userName
}
console.log(student);

let aobj = {
schoolName:  "rahul",
class: 7,
"roll no":23,
school: "vpm gyan"
}
console.log(aobj.class);

for(let students in aobj)
{
console.log(students);
}

const obj = {
a : 1,
b : 2,
a : 3
}
console.log(obj);