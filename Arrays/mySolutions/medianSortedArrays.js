//Median of two sorted arrays of different sizes

const findMedian = (a, b) => {
  const mArray = [...a, ...b];
  if (mArray.length % 2 === 0) {
    console.log("Even Array");
    let i = mArray.length / 2;
    let j = mArray.length / 2 - 1;
    let median = (mArray[i] + mArray[j]) / 2;
    return median;
  } else {
    console.log("Odd Array");
    return mArray[Math.floor(mArray.length / 2)];
  }
};

console.log(findMedian([1, 2, 3, 4], [5, 6, 7, 9]));
