/**
 *   https://leetcode.com/problems/combination-sum/
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function( candidates, target) {
    //global result
   const result = [] ;
   candidates.sort((a,b) => a - b) ;

    // dfs helper  ( recursive function )
    const dfs = ( i, candidates, target, tempArray ) => {
       
        //backtracking case
        if ( target < 0 ) return ;
         // base case 
        if ( target ===  0) {
            result.push( tempArray.slice() )
            return ;
          }

          // dfs recursive case 
        for  ( let j=i; j < candidates.length; j++) {
             tempArray.push( candidates[j]) ;
             dfs(j, candidates, target- candidates[j], tempArray);
             tempArray.pop()
        }
    } 

     dfs(0, candidates, target,[]) ;

     return result ;
};