class Solution {

      moveZeros(arr) {

            let j = -1;
            for(let i = 0; i<arr.length;i++)
            {
                if(arr[i] == 0)
                {
                     j = i ;
                     break;
                }
            }

            if(j == -1)
            {
                return arr;
            }

            for(let i=j+1;i<arr.length;i++)
            {
                if(arr[i] !== 0)
                {
                     // Swap with nums[j]
                    [arr[i] , arr[j]] = [arr[j] , arr[i]];
                    j++;
                }
            }

            return arr;
      }
}

const sol = new Solution();
let arr = [0, 1, 0, 3, 12];
let ans = sol.moveZeros(arr)

console.log(`Moving All Zeros To the end in an array => ${ans.join(" ")}`);


