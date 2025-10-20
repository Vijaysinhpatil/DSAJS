const secondLargest = (arr) => {

    if(arr.length < 2)
    {
        return -1
    }

    let large = -Infinity;
    let second_largest = -Infinity;

    for(let i=0;i<arr.length;i++)
    {
          if(arr[i] > large)
          {
              second_largest = large;
              large = arr[i];
          } else if(arr[i] > second_largest && arr[i] !== large)
          {
            second_largest = arr[i];
          }
    }
    return second_largest;
}

const arr = [1, 2, 4, 7, 7, 5];
const sL = secondLargest(arr);
console.log("Second largest is " + sL);