# ✅ Check if an Array is Sorted

## 📘 Problem Statement
Given an array of integers, determine whether the array is **sorted in non-decreasing order**.

### Example
**Input:**  
arr = [1, 2, 3, 4, 5]

**Output:**  
Given array is Sorted => [1,2,3,4,5]

---

## 💡 Approach
We iterate through the array and compare each element with its previous one.

### Steps
1. Start from the second element (index 1).  
2. Check if the current element is smaller than the previous one.  
3. If any such case is found → array is **not sorted**.  
4. If loop completes → array is **sorted**.

---

## 🧠 Example Dry Run
arr = [1, 2, 3, 4, 5]  
- Compare 2 ≥ 1 → ✅  
- Compare 3 ≥ 2 → ✅  
- Compare 4 ≥ 3 → ✅  
- Compare 5 ≥ 4 → ✅  
→ All good → **Array is sorted**

---

1. Time Complexity => O(n)

2. Space Complexity => O(1)
