let items = ["T-Shirt","Sweater" ];
for(;;){
    let q = prompt("Welcome to our shop, what do you want? (C,R,U,D). (Press other keys to exit).").toLowerCase();
    if(q === "r"){
    }
    else if(q === "c"){
        let newItem = prompt("Enter new item: ");
        items.push(newItem);
    }
    else if(q === "u"){
        let indexOfItem = Number(prompt(`Update position?`));
        let newItem = prompt("Enter new item: ");
        items[indexOfItem-1]=newItem;       
    }
    else if(q === "d"){
        let indexOfItem = Number(prompt(`Delete position?`));
        items.splice(indexOfItem -1 ,1);        
    }
    else{
        break;
    }
    console.log(`Our items: ${items}`);
}