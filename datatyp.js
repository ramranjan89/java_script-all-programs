console.log("data types");

let num= 10; //numer type
let dec_value= 30.5; //decimal value also represnt number data type
let myName = "ram ranjan";
let my2NdName= 'ojha'; // another way to define string variable
let bool_value= true;
let not_assignee;
let nno_value= null;
console.log(typeof num, num);
console.log(typeof dec_value,dec_value);
console.log(typeof myName, myName);
console.log(typeof my2NdName, my2NdName);
console.log(typeof Bool_value, bool_value);
console.log(typeof not_assignee, not_assignee);
console.log(typeof nno_value, nno_value);
console.log("--------------------------- will check data type explicit type conversion now from below code and output----------");
// number to string type:

let changeToString = String(num);
console.log(typeof changeToString, changeToString);

//String to number conversion
let chnagedToNo = Number(myName);
console.log(typeof chnagedToNo, chnagedToNo);  //output will be NaN as text can not be converetd to number
 let userNo ="200";
//let's convert this string to no.
let my_userno = Number(userNo);
console.log(my_userno);
console.log("boolean to number & no to boolean");
let bool_value1 = true;
let bool_no = Number(bool_value1);
console.log(bool_no); // this will return 1 as value of true in boolena is 1.
let i= 40;
let my_bool= Boolean(i);
console.log(typeof my_bool, my_bool);

console.log("---string to boolean-----");
let boo_string = ""; //this is empty  string which means value determine as 0.
let converted_boo = Boolean(boo_string);
console.log(converted_boo); //this will gives output as false bcoz 0 also represnt false 
boo_string = "ram";
converted_boo = Boolean(boo_string);
console.log(converted_boo); //this will give true

console.log("--------using parsInt method converting string to charcter value-------------");
 let string_with_no = "68232 my name is ram";
let  fecting_Number= parseInt(string_with_no);
console.log(typeof fecting_Number, fecting_Number);  //output will be 68232. this will only fetch numeric value.
