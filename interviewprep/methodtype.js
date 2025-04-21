let nos= 
{
a:10,
b:20,
sum: function (){
//console.log(this.a+this.b);
return this.a + this.b;

} 
}
console.log(nos.sum());