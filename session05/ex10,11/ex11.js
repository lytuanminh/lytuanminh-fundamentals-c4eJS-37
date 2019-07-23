window.onload = () => {
    let check = isInside([100, 120], [140, 60, 70, 50]);
    if (check == false){
        console.log("your function is correct")
    }
    else{
        console.log("oops, bugs detected")
    }
}