// Rotate the array from left by one place
class Solution{

    solve(nums)
    {
          let temp = nums[0];

          for(let i=0;i<nums.length - 1;i++)
          {
            nums[i] = nums[i+1];
          }

          nums[nums.length - 1] = temp;
          for(let i = 0;i<nums.length;i++)
          {
              console.log(nums[i] + " ");
          }
    }
}



let arr = [1, 2, 3, 4, 5];

const sol = new Solution()
const res = sol.solve(arr)

