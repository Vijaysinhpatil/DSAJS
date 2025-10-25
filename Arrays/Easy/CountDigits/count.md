# 🔢 **CountDigits**

This folder contains the implementation of a problem from the **_Arrays → Easy_** category in the `DSAJS` repository: **CountDigits**.  
It demonstrates how to count the number of digits in an integer that divide the number itself.

---

## 🧩 **Problem Statement**

> Given an integer array `nums`, for each element `nums[i]`, count the number of digits in `nums[i]` that divide `nums[i]`.  
> Return an array of the same length where each position holds the count for `nums[i]`.  
>
> **Example:**
> ```
> Input: nums = [12, 101, 60]
> Output: [2, 2, 1]
> ```
> **Explanation:**
> - `12` → digits {1,2} → both divide 12 → ✅ count = 2  
> - `101` → digits {1,0,1} → zeros are skipped; each 1 divides 101 → ✅ count = 2  
> - `60` → digits {6,0} → 6 divides 60, 0 skipped → ✅ count = 1  

*(Modify the statement if your implementation differs — for example, if you handle negatives or zeros differently.)*

---

## 📁 **Files Included**

- `CountDigits.js` — main JavaScript solution file  
- `README.md` — explanation, usage, and complexity details (this file)  
- `tests/` — *(optional)* test cases or validation scripts  

---

## ⚙️ **How to Run**

1. Make sure **Node.js** is installed (v14 or above recommended).  
2. Open a terminal in the `CountDigits` folder.  
3. Run the program with:  
   ```bash
   node CountDigits.js
