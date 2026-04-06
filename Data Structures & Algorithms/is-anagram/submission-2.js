class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length != t.length) return false

        const sortS = s.split('').sort()
        const sortT = t.split('').sort()

        const res = sortS.map((val, i) => sortT[i] === val)
        return !res.includes(false)
    }
}
