const InsertionSort = (arr , n) => {

     for(let i = 0; i <= n - 1; i++){

        let j = i;

        while( j > 0 && arr[j - 1] > arr[j]){

            [arr[j] , arr[j - 1]] = [arr[j - 1] , arr[j]]
            j--;

        }
     }

     return arr

}

const arr = [5 , 4 , 3 , 2 , 1]
let n = arr.length
const ans = InsertionSort(arr , n)
console.log("Insertion Sort : " , ans);
