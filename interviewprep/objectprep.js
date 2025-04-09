let school=
{
name: 'gossner',
totalStudent: 30000,
address: 'ranchi',
department: {
it: "information tech",
bio: "biology",
che: "chemistry",
}}

console.log(school.name);
console.log(school.department);

for(let sch in school)
{
console.log(`${sch} : ${school[sch]}`);
}

let ab = {a:1, b:3, c:5, d:8}
for(let bc of Object.entries(ab))
{
console.log(bc);
}

let myData= {name: 'ram', department: 'IT', add: 'Jharkhand'}
console.log(Object.values(myData));
console.log(Object.keys(myData));