const Majority = ( arr ) => {

    let n = arr.length;
    let cnt = 0;
    let el;

    for(let i=0; i<n;i++)
    {
        if(cnt === 0)
        {
            cnt = 1;
            el = arr[i]
        }else if(el === arr[i])
        {
            cnt++;
        }else{
            cnt--;
        }
    }

    let cnt1 = 0;
    for(let i=0; i<n;i++)
    {
        if(arr[i] === el)
        {
            cnt1++;
        }
    }

    if(cnt1 > Math.floor(n / 2))
    {
        return el;
    }
    return -1;
}

let arr = [2, 2, 1, 1, 1, 2, 2]
let ans = Majority(arr)
console.log("Majority Element => " ,ans);
