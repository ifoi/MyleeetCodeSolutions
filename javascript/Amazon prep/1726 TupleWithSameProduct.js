/**
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var tupleSameProduct = function(nums) {
    let counts = new Map() ;
     let ans = 0 ;
    
    for (let i = 0; i< nums.length -1 ;  i++ )
        for (let j = i+1 ; j < nums.length ; j ++) {
            let prod = nums[i] * nums[j] ;
            
             if (counts.has(prod)) {
                 counts.set(prod, counts.get(prod) + 1 );
             }
              else counts.set(prod,  1 ) ;
             }
    
      
    counts.forEach( (count, product) => {
      if (count > 1 ) {
           ans +=  (count * (count-1)/2) * 8  ;
            } 
       
         } )
     
    return ans ;
};