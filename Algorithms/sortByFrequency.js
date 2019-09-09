/**
 *  Sorting an array order by frequency of occurence in javascript
 *  @param {array} array An array to sort
 *  @returns {array} array of item order by frequency
 **/
//Example Suppose you have an array [2, 2, 1, 4, 2,5, 4,4,4, 5]
//Answer : [ '4', '4', '4', '4', '2', '2', '2', '5', '5', '1' ]

function sortByFrequency(array) {
    let frequency = {};
    let sortAble = [];
    let newArr = [];

    array.forEach((value) => { 
        if ( value in frequency )
            frequency[value] = frequency[value] + 1;
        else
            frequency[value] = 1;
    });

    for(let key in frequency){
        sortAble.push([key, frequency[key]])
    }

    //[[2,3],[1:1],[4:4],[5:2]]
    sortAble.sort((a, b)=>{
        return a[1] - b[1]
    })
    //[[1,1],[5,2],[2,3],[4,4]]
    sortAble.forEach((obj)=>{
        for(var i=0; i < obj[1]; i++){
            newArr.push(obj[0]);
        }
    })
    return newArr;
    
}


console.log(sortByFrequency([2, 2, 1, 4, 2,5, 4,4,4, 5]))

