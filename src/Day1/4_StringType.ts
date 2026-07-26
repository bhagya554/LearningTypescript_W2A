let browser="chrome";
browser='firefox';
browser=`safari`;

let Age=90;
let my_name="Harsha";
console.log("My age is "+Age)
console.log("My age is "+Age + " and running testcases on: " + browser)
console.log(`My name is ${my_name} and my age is ${Age}`)

// //div[text()=`${my_name}`] => //div[text()="Harsha"]

//In Typescript we should use single quote by default

//If you are using double quotes and using a formatter like Prettier or ESLint -> It converts all double quotes to single quotes

//Multi Line String Variable
let postal_address=
`101,
Street:89,
City: Newyork,
State: NY
Country: USA`;
console.log(`Postal code is : ${postal_address}`)

console.log()

let Postal_Address="101 \n 'Street:1' \n 'City:Newyork'"
console.log(Postal_Address)

/*
Escape Characters in Typescript
1.\n -> new line
2.\t -> Tab
3.\\ -> Backslash
4.\' -> single quote
5.\" -> double quote
*/

//Inbuilt String Functions in Typescript
//length, 
//toUpperCase(), 
//toLowerCase(), 
//indexOf(), 
//lastIndexOf(), 
//charAt(), 
//includes(), 
//startsWith(), 
//endsWith(), 
//replace(), 
//slice(), 
//substring(), 
//split()

