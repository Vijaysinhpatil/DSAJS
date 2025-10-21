# 🔄 Rotate an Array Left by One Place

## 📘 Problem Statement
Given an array of integers, rotate the array to the **left by one position**.

### Example
**Input:**  
arr = [1, 2, 3, 4, 5]  

**Output:**  
[2, 3, 4, 5, 1]

---

## 💡 Approach
We can achieve a left rotation in a single pass by temporarily storing the first element and shifting all other elements one position to the left.

### Steps
1. Store the first element in a temporary variable (`temp = nums[0]`).  
2. Shift every element one step to the left (`nums[i] = nums[i+1]`).  
3. Place the stored element (`temp`) at the end of the array.  
4. Print or return the rotated array.

---

## 🧠 Example Dry Run
arr = [1, 2, 3, 4, 5]  
- temp = 1  
- After shifting → [2, 3, 4, 5, _]  
- Place temp → [2, 3, 4, 5, 1]  

✅ Result → [2, 3, 4, 5, 1]


1. Time Complexity => O(n)
2. Space Complexity => O(1)
