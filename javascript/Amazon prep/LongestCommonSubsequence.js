/**
 *  https://leetcode.com/problems/longest-common-subsequence/submissions/
 * 
 *   https://backtobackswe.com/platform/content/longest-common-subsequence/solutions
 * 
 *  Solved with DP   and below with recursion.  
 * 
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
//  var longestCommonSubsequence = function(text1, text2) {
//     let length1 = text1.length ;
//     let length2 = text2.length ;
    
//     let dp = new Array(length1 +1).fill().map( () => new Array(length2 +1).fill(0))
    
//     for (let i =length1 -1 ; i >=0 ; i-- ) {
//         for (let j = length2 -1; j >=0 ; j-- ){
//             if (text1[i] === text2[j]) {
//                 dp[i][j] = 1 + dp[i +1][j+1] ;
//             }else {
//                 dp[i][j] = Math.max( dp[i+1][j] , dp[i][j+1]) 
//             }
//         }
//     }
    
//     return dp[0][0] ; 
// };


var longestCommonSubsequence = function(text1, text2) {
    let length1 = text1.length ;
    let length2 = text2.length ;
    
    const hashMap = new Map() ;
   
    return longestCs( text1, text2, length1, length2, hashMap );
 
};

const longestCs = (text1, text2, length1, length2, hashMap) => {
      
 // base case deals with empty strings 
   
   if ( length1 == 0  || length2 == 0 )  return 0 ;

   let result ;
    const  key = length1 + "i" + length2 ; 
  
    // return value if it has already been computed
    if(hashMap.has(key)) return hashMap.get(key) ;

    if ( text1.charAt(length1-1) === text2.charAt(length2-1) ) {

        result =  1 + longestCs(text1, text2, length1 -1, length2 -1, hashMap) ;
    }else {

         result = Math.max(longestCs(text1, text2, length1, length2 - 1, hashMap), longestCs(text1, text2, length1-1, length2, hashMap)) ;

    }
     
     hashMap.set(key, result);
     return result;
     
}

