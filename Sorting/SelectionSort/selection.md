# 🧩 Selection Sort Algorithm



## 💡 Approach
Selection Sort works by repeatedly finding the smallest element from the unsorted portion of the array and swapping it with the first unsorted element.

---

## 🪜 Steps to Solve Selection Sort

1. **Start** from the first index `i = 0`.  
2. **Assume** the first element (at `i`) is the smallest → `minIndex = i`.  
3. **Find** the smallest element in the remaining part (`i+1` to `n-1`) using a loop `j`.  
4. If you find a smaller element → **update** `minIndex = j`.  
5. **Swap** the element at `i` with the element at `minIndex`.  
6. **Repeat** steps 1–5 for all positions `i` from `0` to `n-2`.  
7. ✅ After all iterations, the array will be **sorted in ascending order**.

---

## Time Complexity

**Best Case**
> O(n)

**Worst And Average Case**
>O(n²)

**space Complexity**
>O(1)