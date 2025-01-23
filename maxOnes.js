const { runTestCases } = require('../Test-Case-Functions')  

class Solution {
    findMaxOnesRow(mat) {
        let maxOnesIdx = 0;
        let maxOnesCount = 0;

        for (let i = 0; i < mat.length; i++) {
            const rowOnesCount = mat[i].reduce((acc, cur) => acc + cur, 0)

            if (rowOnesCount > maxOnesCount) {
                maxOnesCount = rowOnesCount;
                maxOnesIdx = i;
            }
        }

        return [maxOnesIdx, maxOnesCount];
    }

}


// Space Complexity -  0(1) - Variables are maxOnesIdx, maxOnesCount and rowOnesCount
// Time Complexity - O(M*N) - M = maatrix length and N = length of matrix row

const testCases = [
    { input: [[1,0],[0,1],[1,1]], expected: [2,2] },
    { input: [[0,0,1],[1,1,1],[1,0,1]], expected: [1,3] },
    { input: [[1,0,1,0],[1,1,0,1],[0,1,1,0]], expected: [1,3] },
];

const testFunction = new Solution();

runTestCases(testFunction.findMaxOnesRow, testCases)