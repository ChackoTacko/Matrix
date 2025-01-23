const { runTestCases } = require('../Test-Case-Functions')  

class Solution {
    maximumWealth(accounts) {
        let maxWealth = 0;

        for (let account of accounts) {
            const accountWealth = account.reduce((acc, cur) => acc + cur, 0);
            maxWealth = Math.max(maxWealth, accountWealth)
        }

        return maxWealth;
    }
}

// Space Complexity -  0(1)
// Time Complexity - O(M*N) Where M = Customers and N = Accounts

const testCases = [
    { input: [[5,15,25],[10,20,30],[0,0,0]], expected: 60 },
    { input: [[10,20],[30,40],[50,60]], expected: 110 },
    { input: [[1,2,3],[4,5,6],[7,8,9]], expected: 24 },
];

const testFunction = new Solution();

runTestCases(testFunction.maximumWealth, testCases)