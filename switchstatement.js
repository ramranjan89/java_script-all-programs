console.log("----------switch stament case and discussion----------");

let days=4;


switch(days)
{
case 1:
console.log(`today is monday ${days}`);
break;
case 2:
case 3:
case 4:
console.log(`today is thrusday and badmint playday ${days}`);
break;
case 5:
console.log(`today is friday ${days}`);
break;
case 6:
console.log(`today is saturday ${days}`);
break;
case 7:
console.log(`today is sunday ${days}`);
break;

}

let day = 6;
let dayName;

switch(day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "weekend";
}

console.log(dayName);

let score = 1;

switch (true) {
  case (score >= 90):
    console.log("A grade");
    break;
  case (score >= 80 && score < 90):
    console.log("B grade");
    break;
  case (score >= 70 && score < 80):
    console.log("C grade");
    break;
  default:
    console.log("F grade");
}

console.log("-----------------fall through---------------");
let color = 'red';

switch (color) {
  case 'red':
  case 'blue':
  case 'green':
    console.log("This is a primary color");
    break;
  case 'yellow':
    console.log("This is a secondary color");
    break;
  default:
    console.log("Color not recognized");
}