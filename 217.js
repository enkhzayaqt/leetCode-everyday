/**
 * @param {number[]} nums
 * @return {boolean}
 */

// using set
var containsDuplicate = function(nums) {
    let set = new Set(nums);
    return set.size != nums.length;
};

// using map
var containsDuplicate = function(nums) {
    let obj = {};
    for(let num of nums){
        if(obj[num] == undefined ) {
            obj[num] = 1;
        } else return true;
    }
    return false
};