# Reverse Number

A simple JavaScript function that reverses the digits of a given number.

## Description

This program takes a positive integer and returns its reverse. For example, if the input is `234`, the output will be `432`.

## How It Works

The algorithm uses a mathematical approach to reverse the number:

1. Extract the last digit using the modulo operator (`n % 10`)
2. Add this digit to the reversed number (after multiplying the current reversed number by 10)
3. Remove the last digit from the original number using integer division
4. Repeat until all digits are processed





## Example

**Input:** `234`  
**Output:** `432`

**Input:** `1000`  
**Output:** `1`

**Input:** `56789`  
**Output:** `98765`

## Time Complexity

- **Time Complexity:** O(log₁₀(n)) - where n is the input number (number of digits)
- **Space Complexity:** O(1) - constant space

## Notes

- This function works for Both positive and negative integers
- Leading zeros in the original number will be lost in the reversed number (e.g., `1000` becomes `1`)
- For negative numbers, you would need to handle the sign separately

## License

Feel free to use this code for learning and projects!