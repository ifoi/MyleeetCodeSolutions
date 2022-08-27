/**
 *   https://leetcode.com/problems/find-pivot-index/
 * 
 * *
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(arr) {
    
    let rightSum = 0;
let leftSum = 0;
let length = arr.length ;

let pivot = -1

for ( let i=0; i < length ; i++) {
  if( i != 0)  leftSum +=arr[i-1] ;
     rightSum = 0 ;

     for ( let j= i+1; j< length ; j++) {
         rightSum += arr[j] ;
        
     }
  
    // console.log("leftSum : " + leftSum + "  rightSum : " + rightSum + " index :" + i) ;
    
   if (leftSum === rightSum) return  pivot = i; 
   
  //  leftSum += arr[i] ;
}

return pivot ;

} 