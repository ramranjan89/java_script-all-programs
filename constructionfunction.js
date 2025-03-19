function Bike(brand,cc,engine,consolemeter,speed)  // this is consturctor function
{
	this.brand= brand;       //this refers to the newly created object when the function is invoked using the new keyword. 
	this.cc= cc;              //In this example, this.name and this.age assign properties to the object.
	this.engine= engine;
	this.consolemeter=consolemeter;
	this.speed= speed;
	this.bikeDetails = function() {
    console.log(`Hello, my bike is ${this.brand} and I run on speed ${this.speed} max`);
  }     //we can also use method under a constructor function.
}


let bikeOne= new Bike("Harley", 440, "Liquid cool", "digital", 150);
let bikeTwo= new Bike("TVS", 350, "Oil cooled", "digital", 130);
console.log(bikeOne);
console.log(bikeTwo);
//we can also change the value of any property:
bikeOne.speed= 160;
console.log(bikeOne);
bikeOne.bikeDetails();