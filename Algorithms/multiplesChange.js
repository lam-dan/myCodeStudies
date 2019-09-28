function multipleChange (number){
    let string = "";

    while(number >= 10){
        number = number - 9;
        string += '9';
    }
    if(number === 0){
        return string;
    }
    string = number.toString() + string;
    return string;
}

console.log(multipleChange(16));