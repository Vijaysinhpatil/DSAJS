const pattern1 = (N) => {

    for(let i=0;i < N ;i++)
    {
          let row = "";

          //inner for loop

          for(let j=0;j<N;j++)
          {
            row += "* ";
          }
          console.log(row);
          
    }
}

pattern1(5)