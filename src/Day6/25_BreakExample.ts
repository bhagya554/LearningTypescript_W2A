//break - keyword to stop the loop immediately - loop or switch

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i)
}

//Labelled for loop
outer: for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j == 2) {
            break outer;
        }
        console.log("i--> "+i + " j--> " +j)
    }
    //break;
}