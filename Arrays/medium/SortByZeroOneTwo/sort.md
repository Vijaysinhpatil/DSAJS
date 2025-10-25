# Dutch National Flag Sorting Algorithm

This project implements a **sorting algorithm** for an array containing only `0s`, `1s`, and `2s` using the **Dutch National Flag Algorithm**.

---

## Description

The `sorting` function sorts an array **in-place** so that all `0s` come first, followed by `1s`, and then `2s`. It uses three pointers: 

- `low` → keeps track of the boundary of `0s`  
- `mid` → current element under consideration  
- `high` → keeps track of the boundary of `2s`  

The algorithm runs in **O(n)** time and uses **O(1)** extra space.

---


