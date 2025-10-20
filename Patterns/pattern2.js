const pattern2 = (N) => {

    for(let i = 0;i<N;i++)
    {
        let row = ""
        for(let j=0;j<=i;j++)
        {
            row += "* "
        }
        console.log(row);
    }
}

const N = 5;
pattern2(N)