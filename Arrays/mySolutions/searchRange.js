var searchRange = function (nums, target) {
  var findFirst = function (nums, target) {
    let left = 0,
      right = nums.length - 1,
      index = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }

      if (nums[mid] == target) index = mid;
    }
    return index;
  };

  var findLast = function (nums, target) {
    let left = 0,
      right = nums.length - 1,
      index = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }

      if (nums[mid] == target) index = mid;
    }
    return index;
  };

  let start = findFirst(nums, target);
  let end = findLast(nums, target);

  return [start, end];
};

console.log(`Positions of target: ${searchRange([5, 7, 7, 8, 8, 10], 8)}`);
