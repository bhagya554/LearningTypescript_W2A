//continue can be used only with loops

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i)
}

loop1:for (let i = 1; i <= 3; i++) {
    loop2:for (let j = 1; j <= 3; j++) {
        if (j == 2) {
            continue loop1;
        }
        console.log("i--> " + i + " j--> "+j)
    }
}