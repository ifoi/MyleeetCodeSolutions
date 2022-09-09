/**
 *   https://leetcode.com/problems/target-sum/
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var findTargetSumWays = function( nums, target) {
    //global result
   let result = 0 ;

    // dfs helper  ( recursive function )
    const dfs = ( i, nums, target, total ) => {
       
        //backtracking case

         // base case 
        if ( i === nums.length) {
            if ( total === target ) {
                result++ ;
            }
            return ;
        }

        // dfs recursive case 
        total += nums[i] ;
        dfs(i +1, nums, target, total) ;
        total -= nums[i] ;


        total -= nums[i] ;
        dfs(i +1, nums, target, total) ;
        total += nums[i] ;
    } 

     dfs(0, nums , target, 0) ;
     return result ;
};