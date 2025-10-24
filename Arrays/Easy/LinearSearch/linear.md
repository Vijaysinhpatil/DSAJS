# 🔍 Linear Search in an Array

## 📘 Problem Statement
Given an array of integers and a key, find the **index** of the key using **Linear Search**.  
If the element is not found, return **-1**.

### Example
**Input:**  
arr = [1, 2, 3, 4, 5]  
key = 5  

**Output:**  
5 is present at index 4

---

## 💡 Approach — Simple Traversal
We traverse the array from left to right and compare each element with the given key.

### Steps
1. Start from the first element.  
2. Compare each element with the key.  
3. If a match is found, return the **index**.  
4. If the loop completes with no match, return **-1**.

---

## 🧠 Example Dry Run
arr = [1, 2, 3, 4, 5], key = 5  

| Step | Index | Element | Match |
|------|--------|----------|--------|
| 1 | 0 | 1 | ❌ |
| 2 | 1 | 2 | ❌ |
| 3 | 2 | 3 | ❌ |
| 4 | 3 | 4 | ❌ |
| 5 | 4 | 5 | ✅ Found |

✅ Output → 5 is present at index 4

---