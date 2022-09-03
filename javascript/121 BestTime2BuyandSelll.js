/**
 *  https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    
    let profit = 0 ;
     
    for ( let i = 0; i < prices.length -1 ; i++) {
            
            for (let j = i+1 ; j< prices.length ; j++) {
                 if (prices[i] < prices[j]) {
                  profit = Math.max( profit, prices[j] - prices[i])
                 } else {
                    i = j ;    // move i to the new lowest value found. 
                 }
            }
        
    }
    
    return profit ;
     
};