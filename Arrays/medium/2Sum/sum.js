const sumation = (arr , target) => {

    let n = arr.length;
    let left = 0;
    let right = n - 1;
    
    arr.sort((a , b) => a - b)

    while(left < right)
    {
        let sum = arr[left] + arr[right];
        if(sum == target){

            return "Target Element is Found using 2sum approch"

        }
        else if(sum < target)
        {
            left++;
        }else{
            right--;
        }
    }
    return "Target Element is not Found using 2sum approch"
     

}

let arr = [8,7,9,4,5,1]
let target = 9
let ans = sumation(arr , target)
console.log(ans);
