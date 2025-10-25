const reverse = (n) => {

    let rev = 0;
    n = Math.abs(n)
    while(n > 0)
    {
        let rem = n % 10;
        rev = (rev * 10 ) + rem;
        n = Math.floor(n / 10)
    }

     return rev;
}

let n = -234
const ans = reverse(n)
console.log(`Reverse Number would be => ${ans}`);
