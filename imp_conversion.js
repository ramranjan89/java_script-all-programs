console.log("----- implicite coercsion in Java script----") // in this java script will autometicall convert to the desired data type
// number to string using concatination
let a_no = 10;
console.log(a_no, "this is number right now");
let b_string = "2"+a_no;  // 2 will be concatinated with 10 and gives 210 as output
console.log(typeof b_string, b_string , "after adding variable data type chnaged to string");
console.log("-------string to number conversion----");

let conv_to_Number = "20"-a_no; // string 20 will be substrcated from 10 and give 10 as number data type as output
console.log(typeof conv_to_Number, conv_to_Number, "after substracting variable data type chnaged from string to number");
console.log("\n");
console.log("Number to boolean data type conversion \n");
let ab= true;
let bc =ab+2;
console.log(typeof bc, bc, " boolean convreted to numric value and add 1 as true reprent 1\n");
let a= true;
let b= true;
let z=a+b;
console.log(typeof z, z, "\n");
console.log(" boolean to string converstion or concatination");

let m_nameee = " my name is ram";
let we = m_nameee+" "+a;
console.log(typeof we, we, "after adding boolean concatinated with string\n");
