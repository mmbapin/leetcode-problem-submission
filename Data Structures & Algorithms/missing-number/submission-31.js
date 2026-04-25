class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let numSet = new Set(nums);
        for(let i = 0; i < 32; i++){
            if(!numSet.has(i)){
                return i;
            }
        }
    }
}
