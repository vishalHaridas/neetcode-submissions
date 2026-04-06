class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortedS = strs.map(s => s.split('').sort().join(''))
        console.log(sortedS)
        let map = new Map()

        for (let [i, s] of sortedS.entries()){
            if (!map[s]){
                map[s] = []
            }
            map[s].push(strs[i])
        }

        return Object.values(map)
    }
}
