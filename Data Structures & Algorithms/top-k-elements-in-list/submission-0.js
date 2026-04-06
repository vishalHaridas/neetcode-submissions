class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let top = {}

        for (let num of nums){
            if (!top[num])
                top[num] = 1
            else
                top[num] = top[num] + 1
        }

        console.log('top:', top)

        let res = []
        
        for (let i = 0; i < k; i ++){
            let maxCount = -1
            let maxVal = -1
            for (let [key, val] of Object.entries(top)){
                if (val > maxCount){
                    maxCount = val
                    maxVal = key
                }
            }
            res.push(maxVal)
            delete top[maxVal]
        }
        
        return res
    }
}
