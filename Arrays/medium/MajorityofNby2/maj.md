# 🧠 Majority Element in an Array

## 📘 Problem Statement
Given an array of integers, find the **majority element** — the element that appears **more than n/2 times**, where `n` is the size of the array.

If no such element exists, return `-1`.

---

## 🧩 Example
**Input:**
```
arr = [2, 2, 1, 1, 1, 2, 2]

```


**Output:**

```
Majority Element => 2

```

---

## 💡 Approach — Boyer-Moore Majority Vote Algorithm
1. Initialize a **count (`cnt`)** and a **potential candidate (`el`)**.  
2. Traverse the array:
   - If `cnt == 0`, set the current element as the new candidate.
   - If the current element equals the candidate, increment `cnt`.
   - Otherwise, decrement `cnt`.
3. After one pass, verify if the candidate actually appears more than `n/2` times.
4. Return the candidate if valid, else return `-1`.

---

---

⏱️ Complexity Analysis

- Time Complexity: O(n) — Two linear traversals.

- Space Complexity: O(1) — Constant extra space.

---