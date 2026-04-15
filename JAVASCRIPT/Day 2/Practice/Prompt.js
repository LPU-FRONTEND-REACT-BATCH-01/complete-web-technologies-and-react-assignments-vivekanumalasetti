let n = prompt("Enter your n");

if(n < 8) {
    for(let i=1; i<=n; i++) {
        console.log(i);
    }
} else {
    let v = n*n;
    for(let i=1; i<=v; i++) {
        console.log(n);
    }
}