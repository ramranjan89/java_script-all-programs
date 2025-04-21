class Test {

constructor(name, rollNo)
{
 this.name= name;
 this.rollNo= rollNo;
}
displayDetails()
{
console.log(`${this.name}`);
console.log(`${this.rollNo}`);
}
}

const test = new Test("ram", 30);
test.displayDetails();