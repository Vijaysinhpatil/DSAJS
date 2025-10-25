# Two-Sum Algorithm (Using Two-Pointer Technique)

This project implements a **two-sum algorithm** using the **two-pointer technique** to find if any two numbers in a given array add up to a specific target.

---

## Description

The `sumation` function checks whether there are **two numbers in an array** that add up to a given `target`. The approach works efficiently by:

1. Sorting the array in ascending order.  
2. Using two pointers (`left` and `right`) to traverse the array from both ends.  
3. Adjusting the pointers based on the sum comparison with the target.

---
## Complexity

| Type             | Complexity                  |
|-----------------|-----------------------------|
| Time Complexity  | O(n log n) (sorting) + O(n) (two-pointer) → O(n log n) |
| Space Complexity | O(1) (in-place sorting)    |
