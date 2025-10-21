# 🔍 Find the Largest Element in an Array

## 📘 Problem Statement
Given an array of integers, find and return the **largest element** in the array.

### Example
**Input:**  
arr = [40, 50, 60, 70, 80, 100]  

**Output:**  
Largest = 100

---

## 💡 Approach
We iterate through the array while keeping track of the **maximum element** found so far.

### Steps
1. Initialize a variable `large` with the first element of the array.  
2. Traverse the array from the second element onward.  
3. If the current element is greater than `large`, update `large`.  
4. After the loop ends, `large` will hold the maximum value.

---

## 🧠 Example Dry Run
arr = [40, 50, 60, 70, 80, 100]  
- Start: large = 40  
- Compare 50 > 40 → large = 50  
- Compare 60 > 50 → large = 60  
- Compare 70 > 60 → large = 70  
- Compare 80 > 70 → large = 80  
- Compare 100 > 80 → large = 100  
✅ Final answer: **100**

---

1. Time Complexity => O(n)
2. Space Complexity => O(1)
