console.log("------methods in java scripts");
//method si nothing
//object will have data as well as behavior, means we know something and we do something.
//what we know is nothing but variable but what we do is nothing but functions
// A boject with a function is call it as method object+function == method
let bike1= 
{ cc: 250,
model: "retro",
speed: 120,
speedometer: "digital",
brand: "Tvs",
tyres: function (){

	console.log(bike1.model);  //model is nothing but property of an object. so we are using through object varible name. 
	console.log(this.speed);   //to over come of issue we can use this, This will be refer to the current object where the function is.
	return 1;
}
}

let bike2= 
{ cc: 350,
model: "sports",
speed: 150,
speedometer: "analog",
brand: "Royal Enfield",
tyres: function (){
	
	console.log(bike1.cc); // this represent the bike1 object.
	console.log(this.cc);   // this represent to this function object (bike2) key.
}
}

bike2.tyres();  // here bike 2 is methid is getting called so always that function details should be visible
// that's why we use this keyword.


if(bike1.cc> bike2.cc)
	console.log(bike1);
else
	console.log(`the powerfull CC bike is
${bike2.cc}`);

