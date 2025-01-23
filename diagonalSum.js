const { runTestCases } = require('../Test-Case-Functions')  

class Solution {
    diagonalSum(mat) {
        let totalSum = 0;
        const matrixLength = mat.length;

        for (let i = 0; i < matrixLength; i++) {
           totalSum += (mat[i][i] + mat[matrixLength - 1 - i][i])
        }

        if (matrixLength % 2 !== 0) {
            const middle = Math.floor(matrixLength/2)
            totalSum -= mat[middle][middle]
        }

        return totalSum;
    }

}


// Space Complexity -  0(1) - Variables are totalSum, matrixLength and middle
// Time Complexity - O(N) - N = length of matrix

const testCases = [
    { input: [[1,2],[3,4]], expected: 10 },
    { input: [[5,3,9],[4,7,1],[8,6,2]], expected: 31 },
    { input: [[1]], expected: 1 },
];

const testFunction = new Solution();

runTestCases(testFunction.diagonalSum, testCases)