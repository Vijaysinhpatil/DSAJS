class Solution{

    linear(arr , key)
    {
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i] == key)
            {
                return i;
            }
        }
        return -1;
    }
}

const arr = [1 , 2 , 3 , 4 , 5]
const key = 5;

const sol = new Solution()
const ans = sol.linear(arr , key);
console.log(`${key} is present at index ${ans}`);
