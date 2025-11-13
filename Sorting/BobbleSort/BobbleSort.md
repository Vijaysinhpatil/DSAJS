## 💡 Approach

1. Bubble Sort works by repeatedly swapping adjacent elements if they are in the wrong order.  
After each pass, the **largest element "bubbles up"** to its correct position at the end of the array.

---

## 🪜 Steps to Solve Bubble Sort

1. **Start** from the end of the array (`i = n - 1`) and move backward.  
2. **Compare** each adjacent pair of elements (`arr[j]` and `arr[j+1]`).  
3. If `arr[j] > arr[j+1]`, **swap** them.  
4. After each pass, the largest element moves to its correct position at the end.  
5. **Repeat** the process until the array is fully sorted.  
6. ✅ Finally, return the sorted array.

---

## Time Complexity

**Best Case**
> O(n)

**Worst And Average Case**
>O(n²)

## space Complexity
>O(1)