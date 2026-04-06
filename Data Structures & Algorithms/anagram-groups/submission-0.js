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
            let posSet = new Set()
            for (let [j, s1] of sortedS.entries()){
                if (s === s1) posSet.add(j)
            }
            map.set(s, posSet)
        }

        let res = []
        for (let arr of map.values()){
            let anagramGroup = []
            for (let i of arr){
                anagramGroup.push(strs[i])
            }
            res.push(anagramGroup)
        }

        return res
    }
}
