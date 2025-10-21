# 🌀 Rotate an Array by D Places (Right Rotation)

## 📘 Problem Statement
Given an array of integers, rotate the array to the **right** by `k` positions.

### Example
**Input:**  
arr = [1, 2, 3, 4, 5, 6, 7], k = 2  

**Output:**  
[6, 7, 1, 2, 3, 4, 5]

---

## 💡 Approach
We use a simple **temporary array method**:

1. Handle edge cases (like empty array or k > n).  
2. Take modulo → `k = k % n`  
3. Store the last `k` elements in a temporary array.  
4. Shift the remaining elements to the right.  
5. Place the stored elements at the beginning.

---

### 🧠 Example Dry Run
arr = [1, 2, 3, 4, 5, 6, 7], k = 2  
- Last 2 elements → [6, 7]  
- Shift remaining → [1, 2, 3, 4, 5]  
- Final result → [6, 7, 1, 2, 3, 4, 5]

---

### ✅ Time Complexity
O(n)

### ✅ Space Complexity
O(k)

---
