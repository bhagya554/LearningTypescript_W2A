let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
console.log("Using normal For loop using index i starting from 0")
for(let i=0;i<months.length;i++){
    console.log(months[i])
}

console.log()
console.log("Using for.. of")
for(let month of months){
    console.log(month)
}

//loop will iterate over index
console.log()
console.log("Using for.. in - loop will iterate over index")
for(let index in months){
    console.log(months[index])
}

console.log()
console.log("Using for.. Each")
months.forEach((month) => {
    console.log(month)
})