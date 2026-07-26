//Allows any type of data as we didn't mentioned the datatype of an array
let users=["Abhi","vishnu","Gopal",100,true]
console.log(users)

//If we want to strictly say that array should contain only string values
let employeeNames:string[]=["Abhi","vishnu","Gopal"]
console.log(employeeNames)


//Multiple datatypes
let usernames:(string|number)[]=["Abhi","vishnu","Gopal",23232,242343]
console.log(usernames)

let numbers:number[]=[1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[4]);
console.log(numbers[5]);//undefined


//Update value of array at particular index
console.log(numbers);
numbers[0]=90
//add new number to array at end
console.log(numbers);
numbers.push(100)
console.log(numbers);

//adds a new element at  start of array
numbers.unshift(9000)
console.log(numbers);


//removes first value from the array
numbers.shift()
console.log(numbers);

