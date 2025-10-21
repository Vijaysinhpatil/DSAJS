// Check if the arrau is sorted or not

const ifSorted = (arr) => {

     for(let i=1;i<arr.length;i++)
     {
          if(arr[i] >= arr[i-1])
            {

            } else {
                return false;
            }
     }
     return true
}

const arr = [1,2,3,4,5]
const res = ifSorted(arr)

res ? console.log(`Given array is Sorted => ${arr}`) : console.log(`Given Array is Not Sorted => ${arr}`);

// Time Complexity => O(n)
// Space Complexity => O(1)
