let items = ["T-Shirt","Sweater" ];
for(;;){
    let q = prompt("Welcome to our shop, what do you want? (C,R,U,D). (Press other keys to exit).").toLowerCase();
    if(q === "r"){
    }
    else if(q === "c"){
        let newItem = prompt("New item?");
        items.push(newItem);
    }
    else if(q === "u"){
        let itemIndex = Number(prompt("Update position?"));
        let newItem = prompt("New item?");
        items[itemIndex-1]=newItem;       
    }
    else if(q === "d"){
        let itemIndex = Number(prompt("Delete position?"));
        items.splice(itemIndex -1 ,1);        
    }
    else{
        break;
    }
    console.log(`Our items: ${items}`);
}