function findUnique (array){
    let dict = {};
    for(let i =0; i<array.length;i++){
        if(dict[array[i]]){
            dict[array[i]] += 1;
        } else {
            dict[array[i]] = 1;
        }
    }
    
    for(const key in dict){
        if(dict[key] === 1){
           return key;
           }
    }
    
    return false;

}

console.log(findUnique([1,2,3,1,2,3,4]));