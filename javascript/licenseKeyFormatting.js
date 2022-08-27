/**
 * https://leetcode.com/problems/license-key-formatting/
 * 
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    
     //remove all dashes
    let license =  s.replaceAll("-", "").toUpperCase() ;
    let result = ""
    
    let firstSplitLength = (license.length % k) === 0 ? k : license.length % k ;
    
    //count number of characters
      let licenseLength = license.length ;
   
    result = license.substring(0, firstSplitLength) ;

  for (let i =firstSplitLength ; i< licenseLength ;   i += k )  {
       
    let startIndex =  i ;
    let endIndex = i +k ;
  
    let   splitString = "-" + license.substring(startIndex, endIndex) ;

     //splitString += "-" + splitString  ;
  
    result  += splitString ;
      
    
    }    
    
    return result ;    
  
};