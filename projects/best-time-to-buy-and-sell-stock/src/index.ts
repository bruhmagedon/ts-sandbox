const prices = [2, 1, 4, 5, 2, 9, 7];

function maxProfit(prices: number[]) {
  let max = 0;
  let max2 = 0;
  for (let i = 0; i < prices.length; i++) {
    let j = i + 1;
    while (prices[i] < prices[j]) {
      if (prices[j] > prices[j + 1]) {
        max += prices[j] - prices[i];
        i = j;
        break;
      }
      if (prices[j + 1] === undefined) {
        max2 = prices[j] - prices[i];
        i = j;
      }
      j++;
    }
  }
  return max + max2;
}

console.log(maxProfit(prices));
