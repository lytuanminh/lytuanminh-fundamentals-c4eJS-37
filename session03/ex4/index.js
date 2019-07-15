    
let flock = [5,7,300,90,24,50,75];
// 4.1
console.log(`Hello, my name is Minh and here is my flock ${flock}`);


for(let month = 1;;month++){
    if(month>1){
        bored = prompt(`${month -1} month has passed!Bored yet? (y/n)`).toLowerCase();
        if (bored ===`y`){
            break;
        }
    }
    else{}
    
// 4.2
let maxSize = Math.max.apply(Math, flock);
console.log(`Now my biggest sheep has size ${maxSize}! Lets shear it!`); 

// 4.3
let maxIndex = flock.indexOf(maxSize);
flock[maxIndex]=8;
console.log(`After shearing, here is my flock ${flock}`);

// 4.4
 flock.forEach((size,index)=>{
    flock[index] = flock[index] + 50;
})

// 4.5
console.log(`MONTH ${month} :One month has passed, here is my flock ${flock}`)
}

// 4.6
let totalSize = 0;
for (let i = 0; i < flock.length; i++) {
    totalSize = totalSize + flock[i];
}

console.log(`My flock has size in total: ${totalSize}. I would get ${totalSize*2}$`)