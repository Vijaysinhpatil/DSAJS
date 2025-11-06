const findUnion = (arr1, arr2) => {
  let i = 0, j = 0;
  let union = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    } else {
      if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
        union.push(arr2[j]);
      }
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    if (union[union.length - 1] !== arr1[i]) {
      union.push(arr1[i]);
    }
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    if (union[union.length - 1] !== arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }

  return union;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

const answer = findUnion(arr1, arr2);
console.log("Union Array =>", answer.join(" "));
