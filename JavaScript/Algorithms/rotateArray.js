//Given an array, rotate the array to the right by k steps, where k is non-negative
//Input: [1,2,3,4,5,6,7] and k=3
//Output: [5,6,7,1,2,3,4]

var rotate = function (nums, k) {

    //fast exits where the array size is only 1, so any rotations will make no difference
    //OR if K is equal to the same length of the array, then the array stays in place with no rotations
    if (nums.length < 2 || k === nums.length) {
        return;
    }

    //calculates remaining number of rotations since we only care about anything greater than the length of the array and stores it in K
    if (k > nums.length) {
        k = k - nums.length;
    }

    //length of the array plus rotation times that will actually make a difference 3+1 = 4
    nums.length += k;

    //calculates the number of times we need to shift the array to the right, in this case 6 times
    let nums2 = nums.length - k - 1

    console.log("length of the array remaining rotations to rotate nums.length = " + nums.length);
    console.log("number of times to to shift numbers in the array over nums2 =", nums2);
    console.log("k is the number of rotations left =", k);

    //shifts the array over [1,2,3] => [1,2,3,3] => [1,2,2,3] => [1,1,2,3]
    //
    for (let i = nums2; i >= 0; i--) {
        console.log(nums[i + k], nums[i]);
        nums[i + k] = nums[i];
        console.log(nums[i + k], nums[i]);
    }

    console.log("Array 27", nums);

    //k is the number of rotations needed which is also the number of variables we need to move to the front of the array
    //
    for (let j = 0; j < k; j++) {
        console.log(nums[j], nums[nums.length - k + j]);
        nums[j] = nums[nums.length - k + j];
    }

    //subtracts from the array the last value
    // same as nums.length = nums.length-k;
    nums.length -= k;

    return nums;
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate([1, 2, 3], 4));

//
var rotate = function (nums, k) {
    let x = 0
    //Swap the values
    while (x < k) {

        //removes values from the end of the array
        let c = nums.pop();
        console.log(c);
        //unshift adds value to the begginning of the array
        //since c is stored as removing values from the end of the array
        //javascript will add the value first to the beginning of the array and then actually pop it out
        nums.unshift(c);

        x++;
    }
};

// console.log(rotate([1, 2, 3], 4));

// let nums = [2,1,5]
// let c = nums.pop();
// console.log(c);
// nums.unshift(c);
// console.log(nums);

var rotate = function (nums, k) {
    k = k % nums.length;
    console.log(k);
    while (k > 0) {
        nums.unshift(nums.pop());
        k--
    }
    return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// console.log(3%7);


var rotate = function (nums, k) {
    if (nums.length < 2 || k === nums.length) {
        return;
    }
    if (k > nums.length) {
        k = k - nums.length;
    }
    nums.length += k;
    let nums2 = nums.length - k - 1
    for (let i = nums2; i >= 0; i--) {
        nums[i + k] = nums[i];
    }

    for (let j = 0; j < k; j++) {
        nums[j] = nums[nums.length - k + j];
    }
    nums.length -= k;
    return nums;
};