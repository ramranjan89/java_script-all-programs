let nums = {
"title": "multiple of two no",
a: 10,
b: 20

}
console.log(nums);
function multiple(obj)
{
for(let key in obj)
{
if(typeof obj[key]==="number")
{
obj[key]= obj[key]*2;
}
}
}
multiple(nums);
console.log(nums);

const a = {}
const b = {key: "b"}
const c = {key: "c"}
a[b]= 123;
a[c]=456;
console.log(a[b], a[c]);