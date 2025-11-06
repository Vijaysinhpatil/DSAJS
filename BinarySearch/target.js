// Binary Seach to find the targeted element using recursion

const BinarySearch = (arr , low , high , target) => {

    if(low > high) return -1


    let mid = Math.floor((low + high) / 2) 

    if(arr[mid] === target)
        return mid;

    if(arr[mid] < target)
    {
        return BinarySearch(arr , mid+1 , high , target);
    }else{
        return BinarySearch(arr , low , mid - 1 , target)
    }
}

let arr = [3, 4, 6, 7, 9, 12, 16, 17]
let n = arr.length
let target = 12
let answer = BinarySearch(arr , 0 , n - 1 , target)


if(answer === -1)
{
    console.log(`Targeted Element is not Found = ${answer}`);
}else{
    console.log(`Targeted Element is At index = ${answer}`);
}