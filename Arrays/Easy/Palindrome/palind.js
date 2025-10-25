const palindrome = ( n ) => {

    let nCopy = n;


    let rev = 0;

    if(n < 0) console.log("number is not a palindrome");
    

    while( n > 0 ){
        
        let rem = (n % 10);
        // console.log(rem);
        
        rev = (rev * 10) + rem;
        // console.log(rev);
        
        n = Math.floor(n / 10);
        // console.log(n);
        
    }

    if(rev === nCopy)
    {
        console.log(`${rev} number is Palindrome`);
    } else {
        console.log(`${rev} number is not a palindrome`);
    }
}

const n = 121;
palindrome(n)