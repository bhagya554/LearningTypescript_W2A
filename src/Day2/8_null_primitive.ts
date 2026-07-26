let address:null=null;
console.log(address)//null
console.log(typeof address)//object

/*
Why typeof address who has null value is object??
This is a legacy bug in Javascript.and kept it as it is in TS for backward compatibility.
*/

//Mostly we use null when we are expecting a response from an API

let User=null;
console.log(User)
User=100;
console.log(User);

//User API:Response: {"id":1,"name":"Abhi"}

