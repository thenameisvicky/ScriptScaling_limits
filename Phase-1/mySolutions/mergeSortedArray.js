//Description: You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
//Pattern: Three Pointers
var merge = function (nums1, m, nums2, n) {
  //Declating pointers to choose last valid element cause we merge from back
  let i = m - 1;
  let j = n - 1;
  //This is a extenal pointer meaning this is the final array we gonna build this will alter the nums1 in-place without creating a new array
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    //Moving the bigger element to the last of nums1[k] meaning that we are sorting the elements without using sort method instead we sort with indexes
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      //Decrementing cause need to check all element from back ->  front
      i--;
    } else {
      //If not bigger then we include it to nums1 array
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  //This is a cleanup check if any element left in nums2 after adding other elements by sorting without using sort method if present then simply add it to nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);
console.log("Merge Sorted Array In-Place:", nums1);
