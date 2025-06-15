//Description: You are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//Pattern: Sliding Window with Two Pointers

var sellTime = function (prices) {
  let max = 0;
  let min = Infinity;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    if (prices[i] > min) {
      let profit = prices[i] - min;
      max = Math.max(profit, max);
    }
  }
  return max;
};

console.log(`Best Time to Sell Stock: ${sellTime([7, 1, 2, 3, 8, 9, 10, 90])}`);
