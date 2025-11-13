
const selectionsort = (arr , n) => {


    for(let i=0;i<n-1;i++)
    {
         let mini = i;

         for(let j = i + 1; j < n; j++)
         {
            if(arr[j] < arr[mini])
            {
                mini = j ;
            }
         }

         [arr[mini] , arr[i]] = [arr[i] , arr[mini]]
    } 
    return arr;

}

const arr = [5 , 4 , 3 , 2 , 1]
let n = arr.length
const answer = selectionsort(arr , n)

console.log("Sorted Array => " , answer);
