//Description: You are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//Pattern: Classic Sliding Window with Two Pointers

var sellTime = function (prices) {
  //Setting inital values for Pointers
  let max = 0;
  let min = Infinity;
  for (let i = 0; i < prices.length; i++) {
    //Calculating min price best time to buy
    min = Math.min(prices[i], min);
    if (prices[i] > min) {
      //Lock in do the math, amount of profit you can get
      let profit = prices[i] - min;
      //Calculate the Max value every time, coming accross high price than the price you bought!
      max = Math.max(profit, max);
    }
  }
  //Cheers mate you hit the curve!
  return max;
};

console.log(`Best Time to Sell Stock: ${sellTime([7, 1, 2, 3, 8, 9, 10, 90])}`);
