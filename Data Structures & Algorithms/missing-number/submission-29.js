class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let set = new Set(nums);
        for(let i = 0; i < 32; i++){
            if(!set.has(i)){
                return i;
            }
        }
    }
}
