let students =
{ name: "Ramranjan Ojha", rollNo: 101, address: "jharkhand" };

class Student
{

constructor(data)
{

this.name =data.name;
this.rollNo=  data.rollNo;
this.address= data.address;
}

fecthStudent()
{
console.log(`${this.name}`);
console.log(`${this.rollNo}`);
console.log(`${this.address}`);
}
}
const stud =  new Student(students);
stud.fecthStudent();
