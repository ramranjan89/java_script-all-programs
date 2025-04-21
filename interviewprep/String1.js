console.log("ram ranjan".length);
let myName= "chottu";
let name= "123456789";
console.log(name.length);
console.log(name[2]);
console.log(name.charAt(6)); //find the positon of a character in a given string.
console.log(name.charCodeAt(0));  // find the aasci value
console.log(name.toUpperCase()); // convert strring to upper case
console.log("MAKE ME LOWER CASE".toLowerCase());   // Convert String to lower case.
console.log(name.at(-3));
console.log(name.slice(2, 7)); //fetch part of string from original string accpet negative
//value as well.
console.log(name.substring(3,6));
console.log(name.substring(-3,6)); // in substring - value alwys consider as 0.
console.log(name.substring(4,-2));
console.log(`my name is ${myName}`);
console.log("my childhood name is"+" "+myName);
console.log("my childhood name is".concat(myName));
let stringArr = myName.split("");
console.log(stringArr[2]);

console.log(myName.includes("c")); //If any string matches then gives true or else false.
console.log("Playwright is automation tool".includes('i'));
let ctr = "home is a safe place";
console.log(ctr.replace("safe", "best"));
console.log(ctr);
console.log(" myname".trim());
console.log(ctr.trim(" " ));
console.log(" korbo nai  ".trimEnd());
console.log(" larbo nia  ".trimStart());
console.log("jeetbo nai".padEnd(12,"*"));
console.log("Khelobo Nai".padStart(13,"*"));
console.log(ctr.startsWith("H".toLowerCase()));
console.log(ctr.indexOf("e"));
console.log((ctr.lastIndexOf('e')));

