//Description: You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.
//Pattern: BigInt
var plusOne = function (nums) {
  //Using BigInt to have safe Increment for numbers with 2^58 Ex: 9999999999999999 -> ++ mean 1000000000000000 this is wrong to avoid this we use BigInt and increase one n
  // Example with BigInt Incrementation 9999999999999999 -> 9999999999999999 + 1n = 99999999999999999
  let number = BigInt(nums.join(""));
  //Incrementing 1n
  let incNumber = number + 1n;
  //Creating an Array from whole number buy converting to string and split then using map we return an array!
  return incNumber.toString().split("").map(Number);
};

console.log(`Plus one: ${plusOne([1, 2, 3])}`);
