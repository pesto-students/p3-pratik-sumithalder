var maxProfit = function (prices) {

    let globalProfit = 0;
    // minBuyPrice is set to Infinity because we can guarantee the first element will be set to the buy price 
    let minBuyPrice = Infinity;
  
    for (let i = 0; i < prices.length; i++) {
      if (minBuyPrice > prices[i]) {
        minBuyPrice = prices[i];
      }
  
      const currentProfit = prices[i] - minBuyPrice;
  
      if (currentProfit > globalProfit) {
        globalProfit = currentProfit;
      }
    }
  
    return globalProfit;
}

var prices = [7,1,5,3,6,4];

console.log("Max profit = " + maxProfit(prices));