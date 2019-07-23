window.onload = () => {
    let  evenList = getEvenList([1, 2, 5, 9, -10, 6])
    let compareList = [2,-10,6];
    if (evenList.join(',') === compareList.join(',')){
        console.log("Your function is correct")
    }
    else{
        console.log("Ooops, bugs detected");
    }
}
