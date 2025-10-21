// Rotate an array by D places

class Solution{

    Rotate(arr , n , k){

        if(n == 0) return;

        k = k % n;

        if(k > n) return;

        let temp = [k]


        // Storing the last k indices from (n - k) to n
        
        for(let i = n - k;i<n;i++)
        {
            temp[i - n + k] = arr[i];
        }

        // shifting the elements from 0 to n - k to the last
        for(let i = n - k - 1 ;i>=0;i--)
        {
            arr[i + k] = arr[i];
        }

        // placing temp elements to frot of the array

        for(let i=0;i<k;i++)
        {
            arr[i] = temp[i];
        }
    }
}

const n = 5;
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 2;

const sol = new Solution()
const res = sol.Rotate(arr , n , k)

console.log("After Rotating the elements to right");

for(let i =0;i<n;i++)
{
    console.log(`${arr[i]}` + " ");
}
