//@Description: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    //finding the completion value
    let targetNum = target - nums[i];
    if (map.has(targetNum)) {
      return [map.get(targetNum), i];
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
