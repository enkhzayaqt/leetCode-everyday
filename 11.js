/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let max = 0;
    for(let i = 0; i< height.length; i++){
        for(let j = i+1; j<height.length; j++ ){
            let area = Math.min(height[i], height[j]) * (j-i);
            max = Math.max(max, area)
        }
    }
    return max;
};

//time: O(n2);
//space: O(1);



var maxArea = function(height) {

    let max = 0
    let left = 0;
    let right = height.length-1;
    while(left < right){
        let area = (right - left) * Math.min(height[left], height[right]);
        max = Math.max(area, max);
        if(height[left] > height[right]){
            right--;
        }else {
            left++;
        }
    }
    return max;
};


//time: O(n);
//space: O(1);
