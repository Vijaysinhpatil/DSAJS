const sorting = (arr , n) => {

    let low = 0  , high = n - 1 , mid = 0;

    while(mid <= high)
    {
        if(arr[mid] == 0)
        {
            [arr[mid] , arr[low]] = [arr[low] , arr[mid]];
            low++;
            mid++;
        }
        else if(arr[mid] == 1)
        {
            mid++;
        }
        else {
             [arr[mid] , arr[high]] = [arr[high] , arr[mid]];
             high--;
        }
    }
}

let arr = [2,2,2,1,1,1,0,0,0]
let n = arr.length;
sorting(arr , n)
console.log(arr);
