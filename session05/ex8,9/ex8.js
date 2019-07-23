let getEvenList = (list) => {
    result = [];
    for(let i = 0; i < list.length; i++){
        if (list[i]%2 == 0){
            result.push(list[i]);
        }
    }
    return result;
}
getEvenList([1,4,5,-1,10]);
console.log(result);