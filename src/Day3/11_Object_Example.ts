//Object - Collection of Key-Value pair.

let Employee:any={
    id:1,
    name:"raj",
    age:34,
    salary:60000,
    designation:"SE",
    address:{
        city:"New York",
        state:"NY",
        country:"USA"
    },
    skills:["Java","C#","Python"]
}

console.log(Employee)
console.log(Employee.name)

Employee.salary=1000000;
console.log(Employee.salary)

Employee.department="IT"
console.log(Employee)


delete Employee.age
console.log(Employee)

//Add one more field to this same object
//Give :any to Employee object so that later we can add additional fields as well


console.log(Employee.address.city)
console.log(Employee.skills[2])