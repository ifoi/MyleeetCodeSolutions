/**
 *  https://leetcode.com/problems/powx-n/
 * 
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    //base case
 if (n === 0)   { 
   return 1 ;
   
 		} else {
       return ( x * myPow(x, n-1) ) ;  //  if(n > 0) return  x * myPow(x, n-1) ;
     
   } 
};
