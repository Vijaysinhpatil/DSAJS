const count = (number) => {

    if (number === 0) return 1;


    let count = 0;
   
    number = Math.abs(number)

    while(number > 0)
    {
        number = Math.floor(number / 10)
        count++;
    }

    return count;
}

// let digit = 289;
let digit = -128;

let result = count(digit)

console.log(result);
