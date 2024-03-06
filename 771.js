/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let stone of stones){
        if(jewels.indexOf(stone) != -1){
            count++;
        }
    }
    return count;
};

// time: O(n2)
// space: O(1)




var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let obj = {};

    for(let i = 0; i < stones.length; i++){
        if(obj[stones[i]] == undefined){
            obj[stones[i]] = 1;
        }else {
            obj[stones[i]] += 1;
        }
    }

    for(let i = 0; i < jewels.length; i++){
        if(obj[jewels[i]]){
            count += obj[jewels[i]];
        }
    }
    return count;
};

// time: O(n)
// space: O(n)