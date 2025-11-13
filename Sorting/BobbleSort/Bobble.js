const BubbleSort = (arr , n) => {


    for(let i = n-1 ;i >= 0;i--)
    {
        for(let j = 0 ; j <= i - 1; j++ )
        {
            if(arr[j] > arr[j+1])
            {
                [arr[j] , arr[j+1]] = [arr[j+1] ,arr[j]]
            }
        }
    }
    return arr
    
}

const arr = [5 , 4 , 3 , 2 , 1]
let n = arr.length

const answer = BubbleSort(arr , n )
console.log(answer);
