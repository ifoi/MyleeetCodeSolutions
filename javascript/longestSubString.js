/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let length = 0 ;
    let maxLength = 0 ;
     subString =""
    
    for (let i = 0 ;  i <s.length ; i++) {
    
       let currentChar  =  s.charAt(i)
        if ( !subString.includes(  currentChar  ))  {
            length++ ;
           subString +=  currentChar 
        } else { 
             if (length > 0 )  i -= length 
              
            subString = ""
               length = 0    
               }                     
           
       if( maxLength < length)   maxLength = length 
    }
 
 // if( maxLength < length)   maxLength = length 
    
return maxLength ;  
        
};
