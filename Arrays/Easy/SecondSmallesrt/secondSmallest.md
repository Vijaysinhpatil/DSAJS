# 🥈 Find the Second Smallest Element in an Array

## 📘 Problem Statement
Given an array of integers, find and return the **second smallest distinct** element in the array.

### Example
**Input:**  
arr = [1, 2, 4, 7, 7, 5]

**Output:**  
Second Smallest => 2

---

## 💡 Approach
We can find the second smallest element in a **single traversal** using two variables — one for the smallest and one for the second smallest.

### Steps
1. Initialize:
   - `small = Infinity`
   - `second_small = Infinity`
2. Traverse the array:
   - If `arr[i] < small`, update `second_small = small`, then `small = arr[i]`.
   - Else if `arr[i] < second_small` and not equal to `small`, update `second_small = arr[i]`.
3. Return `second_small`.

---

## 🧠 Example Dry Run
arr = [1, 2, 4, 7, 7, 5]

| Step | Element | small | second_small |
|------|----------|--------|--------------|
| 1 | 1 | 1 | ∞ |
| 2 | 2 | 1 | 2 |
| 3 | 4 | 1 | 2 |
| 4 | 7 | 1 | 2 |
| 5 | 7 | 1 | 2 |
| 6 | 5 | 1 | 2 |

✅ Result → **2**

---


1. Time Complexity => O(n)
2. Space Complexity => O(1)
