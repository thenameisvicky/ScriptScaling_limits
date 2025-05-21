const findMedian = (a, b) => {
  //Making sure to do binary search on the smaller array
  if (a.length > b.length) {
    return findMedian(b, a);
  }
  //Takiing the length of arrays and setting the initial highlength as aLen value cause it is the smaller array
  const aLen = a.length;
  const bLen = b.length;
  let high = aLen;
  let low = 0;

  //Making sure we have the arrays sorted
  while (low <= high) {
    //Begining of Partitioning the arrays this is nessesary to find center place small array
    const partitonA = Math.floor((low + high) / 2);
    //Subracting the partitionA (center point of small array) from the total length of the arrays to get the excat left and right side values
    const partitonB = Math.floor((aLen + bLen + 1) / 2) - partitonA; // +1 is neccesary to get correct parititoning for odd length the even length is checked and evaluated below

    //Setting the left and right maximum and minimum values for finding the correct spot to do median
    //maxA doesn't exist — we can't access arr1[-1] so we set -Infinity cause we treat maxA is smallest value as it is from 'a' array
    const maxA = partitonA === 0 ? -Infinity : a[partitonA - 1];
    const minA = partitonA === aLen ? Infinity : a[partitonA];
    const maxB = partitonB === 0 ? -Infinity : b[partitonB - 1];
    const minB = partitonB === bLen ? Infinity : b[partitonB];
    if (maxA <= minB && maxB <= minA) {
      //We have found the correct partitioning and proceed to return the median
      if ((aLen + bLen) % 2 === 0) {
        return (Math.max(maxA, maxB) + Math.min(minA, minB)) / 2;
      } else {
        return Math.max(maxA, maxB);
      }
    }
    if (maxA > minB) {
      high = partitonA - 1;
    } else {
      low = partitonA + 1;
    }
  }
};

console.log(findMedian([1, 2, 3, 4], [5, 6, 7, 8, 9]));
