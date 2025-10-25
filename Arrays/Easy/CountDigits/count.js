class Solution{

        counter(num){

            let count = 0;
            
            num = Math.abs(num)
            while(num > 0)
            {
                
                 num = Math.floor(num / 10);
                 count++;
            }
            return count;
        }
}

const num = -562
const sol = new Solution()
const ans = sol.counter(num)

console.log(`Count Digits = ${ans}`);
