
# Selection sort

- declare an array of size `n`.
- To achieve Selection sort we have to use Two pointer approch. 
- run a for loop from `i = 0` to `n - 1`.
- declare a `mini` and assign `i` value.
- then again run a for loop from `j = i + 1` to `j < n`.
- if `arr[j] < arr[mini]` then assign current `j` to value to `mini`. 
- once u get out from the inner forr loop then swap the both arr[mini] and arr[i].
- then return arr.