//@description: Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

const threeSumClosest = (array, target) => {
  const sortedArray = array.sort((a, b) => a - b);
  let closest = sortedArray[0] + sortedArray[1] + sortedArray[2];

  for (let i = 0; i < sortedArray.length - 2; i++) {
    if (i > 0 && sortedArray[i] === sortedArray[i - 1]) continue;
    let j = i + 1;
    let k = sortedArray.length - 1;

    while (j < k) {
      const sum = sortedArray[i] + sortedArray[j] + sortedArray[k];
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }

      if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      } else {
        return sum;
      }
    }
  }

  return closest;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
