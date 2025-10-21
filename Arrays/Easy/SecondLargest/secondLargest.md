# 🥈 Find the Second Largest Element in an Array

## 📘 Problem Statement
Given an array of integers, find and return the **second largest** distinct element in the array.

### Example
**Input:**  
arr = [1, 2, 4, 7, 7, 5]

**Output:**  
Second largest is 5

---

## 💡 Approach
We can find the second largest element in a **single traversal** using two variables — one for the largest and one for the second largest.

### Steps
1. Initialize:
   - `large = -Infinity`
   - `second_largest = -Infinity`
2. Traverse the array:
   - If `arr[i] > large`, update `second_largest = large`, then `large = arr[i]`.
   - Else if `arr[i] > second_largest` and not equal to `large`, update `second_largest = arr[i]`.
3. Return `second_largest`.

---

## 🧠 Example Dry Run
arr = [1, 2, 4, 7, 7, 5]

| Step | Element | large | second_largest |
|------|----------|--------|----------------|
| 1 | 1 | 1 | -∞ |
| 2 | 2 | 2 | 1 |
| 3 | 4 | 4 | 2 |
| 4 | 7 | 7 | 4 |
| 5 | 7 | 7 | 4 |
| 6 | 5 | 7 | 5 |

✅ Result → **5**

---


1. Time Complexity => O(n)
2. Space Complexity => O(1)
