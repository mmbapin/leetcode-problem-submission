class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newStr = s.replace(/[^A-Za-z0-9]/g, "");
        let left = 0;
        let right = newStr.length - 1;
        while(left < right){
            if(newStr[left].toLowerCase() !== newStr[right].toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
