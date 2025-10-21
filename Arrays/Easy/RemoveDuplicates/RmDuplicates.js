// Removing the duplicates from the array

class Solution{

    removeDuplicates(nums){

        if(nums.length === 0) return 0;


        let i = 0;


        for(let j = 1;j < nums.length;j++)
        {
               if(nums[j] !== nums[i])
               {
                   i++;
                   nums[i] = nums[j];
               }
        }
        return (i+1)
    }
}

let nums = [0,0,1,1,1,2,2,3,3,4];
let sol = new Solution();
let ans = sol.removeDuplicates(nums)
console.log("Unique count =", ans);
console.log("Array after removing duplicates:", nums.slice(0, ans));