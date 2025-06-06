let bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len-1; i++) {
        for (let j = 0; j < len-i-1; j++) {
            console.log('j:'+j,arr[j], 'j+1:'+(j+1), arr[j+1],'i:'+i,arr[i])
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};

// console.log(bubbleSort([13,3,1]))

console.log(bubbleSort([19,2,31,45,6,11,121,27]))