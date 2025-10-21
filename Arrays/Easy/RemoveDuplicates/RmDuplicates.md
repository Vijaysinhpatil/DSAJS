# 🧹 Remove Duplicates from a Sorted Array

## 📘 Problem Statement
Given a **sorted array**, remove the **duplicate elements in-place** such that each unique element appears only once.  
Return the number of unique elements and modify the original array to contain them in the beginning.

### Example
**Input:**  
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]  

**Output:**  
Unique count = 5  
Array after removing duplicates = [0, 1, 2, 3, 4]

---

## 💡 Approach — Two Pointer Technique
We use two pointers (`i` and `j`) to efficiently remove duplicates without using extra space.

### Steps
1. Initialize pointer `i = 0`.  
2. Iterate through the array using pointer `j` starting from index `1`.  
3. Whenever a new unique element is found (`nums[j] !== nums[i]`), increment `i` and assign `nums[i] = nums[j]`.  
4. After traversal, the count of unique elements is `(i + 1)`.

---

## 🧠 Example Dry Run
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]  
- Start: i = 0  
- j = 1 → duplicate (skip)  
- j = 2 → new value (1) → i = 1 → nums[1] = 1  
- j = 5 → new value (2) → i = 2 → nums[2] = 2  
- j = 7 → new value (3) → i = 3 → nums[3] = 3  
- j = 9 → new value (4) → i = 4 → nums[4] = 4  

✅ Result → [0, 1, 2, 3, 4], count = 5

---


1. Time Complexity => O(n)
2. Space Complexity => O(1)
