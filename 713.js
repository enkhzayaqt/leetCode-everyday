/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Brute force solution
// time: O(n2)
// space: O(1)
var numSubarrayProductLessThanK = function(nums, k) {
   // find all the sub array using nested loop
   // check if product is less than k increase count
   // return count
   let count = 0;
   for(let i = 0 ; i < nums.length; i++){
       let product = 1;
       for(let j = i ; j < nums.length; j++){
           product = product * nums[j]
           if(product >= k) break
           count++;
       }
   }
   return count;
};

// Sliding window solution
var numSubarrayProductLessThanK = function(nums, k) {
    let res = 0;
    let left = 0;
    let product = 1;
    for(let right in nums){
        product *= nums[right];
        while(left <= right && product >= k){
            product = product / nums[left];
            left++;
        }
        res += (right - left + 1);
    }
    return res;
};