//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//Return the maximum amount of water a container can store.

const mostWater = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      (right - left) * Math.min(height[left], height[right])
    );

    if (height[right] < height[left]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};

console.log(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
