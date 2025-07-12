//Description: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//Complexity: O(n)
//Pattern: Classic Bit

var singleNumeber = function (nums) {
  //Only one variable because of Complexity
  let result = 0;
  //Looin the array
  for (let num of nums) {
    //Comparison will be XOR bitwise like 2(Numeric value) -> 0010 and 3(Numeric value) -> 0011 and 0010 ^ 0011 => 0001 -> 1(Numeric value)
    result ^= num;
  }
  //Finally returning
  return result;
};

console.log(
  `Single Number Optimized Version: ${singleNumeber([1, , 1, 2, 3, 2])}`
);
