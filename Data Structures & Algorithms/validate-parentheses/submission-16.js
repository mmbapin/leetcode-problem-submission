class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let newChar = [];
        let pairs = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for(let str of s){
            if(['(', '{', '['].includes(str)){
                newChar.push(str)
            }else if([')', '}', ']'].includes(str)){
                if(newChar.pop() !== pairs[str]){
                    return false
                }
            }
        }
        return newChar.length === 0
    }
}
