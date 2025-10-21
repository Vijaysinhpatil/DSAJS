const largest = (arr) => {

    let large = arr[0];

    for(let i=1;i<arr.length;i++)
    {
        if(arr[i] > large)
        {
            large = arr[i]
        }
    }

    return large;
    
}

const arr = [ 40 , 50 , 60 , 70 , 80, 100];

const res = largest(arr)
console.log("Largest =" , res);


//Time complexity => O(n)
//Space complexity => O(1)

