# ⚡ Move All Zeros to the End of the Array

## 📘 Problem Statement
Given an array of integers, move all the **zeros** to the **end** of the array while maintaining the **relative order** of the non-zero elements.

### Example
**Input:**  
arr = [0, 1, 0, 3, 12]

**Output:**  
[1, 3, 12, 0, 0]

---

## 💡 Approach — Two Pointer Technique
We use two pointers to rearrange the array **in-place** without using extra space.

### Steps
1. Find the first zero index (`j`).  
2. Traverse the array from that point onward:  
   - When a non-zero element is found, **swap** it with the element at index `j`.  
   - Increment `j` after every swap.  
3. Return the modified array.

---

## 🧠 Example Dry Run
arr = [0, 1, 0, 3, 12]

| Step | i | j | Array |
|------|---|---|--------|
| Start | - | - | [0, 1, 0, 3, 12] |
| Find first 0 → j = 0 | | | |
| i = 1 → non-zero → swap arr[1] & arr[0] → j = 1 | 1 | 1 | [1, 0, 0, 3, 12] |
| i = 3 → non-zero → swap arr[3] & arr[1] → j = 2 | 3 | 2 | [1, 3, 0, 0, 12] |
| i = 4 → non-zero → swap arr[4] & arr[2] → j = 3 | 4 | 3 | [1, 3, 12, 0, 0] |

✅ Result → [1, 3, 12, 0, 0]

---