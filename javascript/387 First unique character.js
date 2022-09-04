/**
 *  https://leetcode.com/problems/first-unique-character-in-a-string/
 * 
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    // let result = -1 ;
    let length = s.length ;
    
    let characters =  new Map() 
    
    for ( let i = 0;  i <length ; i++) {
         
        if (!characters.has(s[i]) ) {
            
            characters.set(s[i], 1) 
        } else 
            characters.set(s[i], characters.get(s[i]) +1 )
        
    }

    for (let i= 0 ; i < length; i++) {
        if (characters.get(s[i]) === 1)
            return  i
    }
    
    return -1 ;
};