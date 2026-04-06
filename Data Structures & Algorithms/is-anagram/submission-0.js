class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sSorted = s.split('').sort()
        let tSorted = t.split('').sort()

        if (sSorted.length !== tSorted.length)
            return false;

        for (let i = 0; i < sSorted.length; i++){
            if (sSorted[i] !== tSorted[i]){
                return false
            }
        }

        return true;
    }
}
