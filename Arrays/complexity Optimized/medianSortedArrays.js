const findMedian = (a, b) => {
  // @Step 1: Always do binary search on the smaller array to make logic easier and avoid out-of-bound errors
  if (a.length > b.length) {
    return findMedian(b, a); // swap if 'a' is not the smaller one
  }

  const aLen = a.length;
  const bLen = b.length;
  let low = 0;
  let high = aLen;

  // @Step 2: Binary search to find correct partition
  while (low <= high) {
    // Partition index in 'a' (small array)
    const partitionA = Math.floor((low + high) / 2);
    // Partition index in 'b' (big array) so that total elements on left = total elements on right
    const partitionB = Math.floor((aLen + bLen + 1) / 2) - partitionA;

    // @Step 3: Find max of left side and min of right side for both arrays
    // If partitionA is 0, there is nothing on the left side of 'a' → treat as -Infinity
    const maxA = partitionA === 0 ? -Infinity : a[partitionA - 1];
    // If partitionA == aLen, there is nothing on the right → treat as +Infinity
    const minA = partitionA === aLen ? Infinity : a[partitionA];

    // Same logic for array 'b'
    const maxB = partitionB === 0 ? -Infinity : b[partitionB - 1];
    const minB = partitionB === bLen ? Infinity : b[partitionB];

    // @Step 4: Check if we have found the correct partition
    // If all left values are less than all right values, it's a valid split
    if (maxA <= minB && maxB <= minA) {
      // @Step 5: If total length is even → take avg of two middle values
      if ((aLen + bLen) % 2 === 0) {
        return (Math.max(maxA, maxB) + Math.min(minA, minB)) / 2;
      } else {
        // If total length is odd → middle value is the max of left side
        return Math.max(maxA, maxB);
      }
    }

    // @Step 6: Adjust binary search range
    // If maxA > minB, we're too far right in 'a', move left
    if (maxA > minB) {
      high = partitionA - 1;
    } else {
      // Else, move right in 'a'
      low = partitionA + 1;
    }
  }
};

console.log(findMedian([1, 2, 3, 4], [5, 6, 7, 8, 9]));

//@Detiled WalkThrough
//@CalculationPart : a = [1,2] | [4,5] and b = [7,8,9] | [10,11]
//@maxA : last element of left part in a array [2]
//@maxB : last element of left part in b array [9]
//@minA : first element of right part in a array [4]
//@minB : first element of right part in b array [10]
//Rest is Above
