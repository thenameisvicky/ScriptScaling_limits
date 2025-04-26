// @Decription : Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.


const threeSum = (nums) => {
  //Sort the array before searching three sum.
  const sorted = nums.sort((a, b) => a - b);
  let result = [];
  //Three sum mean we need 3 values so -2 is there -2 in the sense before 3 elements from array.
  for (let i = 0; i < sorted.length - 2; i++) {
    //Check to avoid duplicates.
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    //Next element to i.
    let j = i + 1;
    //Ofcourse we need the last element always.
    let k = sorted.length - 1;
    //We only check sum when j < k because making sure to have j is front element (smaller) to k (last element) in a sorted array.
    while (j < k) {
      //Calculating sum
      let sum = sorted[i] + sorted[j] + sorted[k];
      //checking that the number we add come upto 0 according to problem
      if (sum === 0) {
        //Pushing into Array
        result.push([sorted[i], sorted[j], sorted[k]]);
        //To Avoid repeating number pushing
        while (sorted[j] === sorted[j + 1]) j++;
        while (sorted[k] === sorted[k - 1]) k--;
        //Sliding the windows
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
