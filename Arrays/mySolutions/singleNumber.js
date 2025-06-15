//Description: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//You must implement a solution with a linear runtime complexity and use only constant extra space (This solution is not optimized check out in /Arrays/complexity Optimized/singleNumber.js).
//Pattern: HashMap
var singleNumber = function (nums) {
  //Setting map to track the occrance of each element
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    //Setting occrance for number only when there it is not exists in map
    if (!map.has(nums[i])) {
      //Setting number with inital occrance
      map.set(nums[i], 0);
    }
    //If exisitng incremeting the occrance of number
    map.set(nums[i], map.get(nums[i]) + 1);
  }
  //Accesing key and value stored in map that is the syntax of new Map()
  for ([key, value] of map) {
    //Value == 1 mean we return cause it is the single occrance number!
    if (value == 1) return key;
  }
};

console.log(`Single Number: ${singleNumber([4, 2, 2, 4, 5])}`);
