class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxNum = 0;
        while(left <= right){
            let area = Math.min(heights[left], heights[right]) * (right - left);
            maxNum = Math.max(area, maxNum);

            if(heights[left] <= heights[right]){
                left++
            }else{
                right--;
            }
        }
        return maxNum;
    }
}
