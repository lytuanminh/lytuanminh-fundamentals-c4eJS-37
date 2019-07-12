let n = prompt("Enter the number to calculate its factorial");
let f = 1;
for(let i = 1;i <= n;i++){
    f = f*(i);
}
alert(`${n}! = ${f}`);