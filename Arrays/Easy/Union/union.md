# union 

- problem is to find the union elements from both arrays
- declare two arr1 and arr2 
- also declare two pointer elemets like i , j with value 0
- declre an empty array name as union to store the union elemets from both the array.
- for the declare a function named as findUnion
- run a while loop where i less than arr1 of i and j is less the arr2 of j.
- check a condition where arr1[i] <= arr2[j]
- if the condition is true then write a conditon when length of union array is equal to 0 OR total length of an union from 0 to n-1 is not eqal to arr1 of index i store the ith element to the union array.
- if the codition becomes false then check for arr2 where total length of an union array if arr2 OR union array is empty the push the current jth index element to the union array.
- then go for remaining elements from the both array .
- run a while when i < arr1.length  if true then check if the union of length n-1 is not eqal to arr1 of i idex if the conditon is true then store the ith index element to the union array.
- also run a while loop for the jth index when if the loop condition is true then check if the union of length n-1 is not eqal to array of index j if the condition is true then store jth index to the union array.
- retrun union array.
- then make a function call for union .
- store the return value from the findunion function to a variable.
- then use a join function by passing empty an string with a single space to add the space between the union elements.
