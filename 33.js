/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // use binary search to meet time: O(log n)
    // set l, r, m pointer
    // while l <= r check m 
    // if m is target return m
    // if need two case 
    // 1: m belongs to left side: l <= m 
    // then check if target less than l
    // 2: m belongs to right side: l >= m
    // then check if target greater than r
  
    let l = 0;
    let r = nums.length - 1;
    while(l <= r){
        let m = Math.floor((l+r) / 2 );

        if(nums[m] == target) return m;
        // m belongs to left side
        if(nums[l] <= nums[m] ){
            if(target > nums[m] || target < nums[l]){
                l = m + 1;
            }else {
                r = m - 1;
            }
        // m belongs to right side
        }else {
            if(target < nums[m] || target > nums[r]){
                r = m - 1;
            }else {
                l = m + 1;
            }
        }
    }
    return -1;
};