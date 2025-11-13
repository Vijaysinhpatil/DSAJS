

## 💡 Approach
- Insertion Sort builds the sorted array one element at a time.  
It **takes an element** from the unsorted part and **places it in its correct position** among the already sorted elements.

---

## 🪜 Steps to Solve Insertion Sort

1. start outer for loop from the first index of the an array ie `i = 0` - ` i <= n-1`.
2. create a variable of name `j` which holds the value of `i` that is current element.
3. then run a while loop when `j > 0` && `arr[j - 1]` > `arr[j]`.
4. i.e It compares the current element to the entire array.
5. for each iteration i value compares with j value and then swapout.
6. then update the j value `j--`.
7. return array.



