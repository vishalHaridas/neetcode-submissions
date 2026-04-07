class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (let s of strs){
            res += (s.length).toString() + "#" + s
        }

        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0

        while (i < str.length){
            let j = i
            while (str[j] !== "#"){ 
                j = j + 1
            }
            let len = parseInt(str.substring(i, j))
            res.push(str.substring(j + 1, j + 1 + len))
            i = j + 1 + len
        }

        return res
    }
}
