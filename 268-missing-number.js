/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length; 
    let sum = 0
    for(let i = 0 ; i < nums.length; i++){
        sum += nums[i];
    }

    let absSum = 0;
    for(let i = 0 ; i <= n; i ++){
        absSum += i
    }
    return absSum-sum;
};