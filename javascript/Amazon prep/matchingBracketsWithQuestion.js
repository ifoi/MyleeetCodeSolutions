/*** There is a string with the character [,(,),],? find the number of possible ways to divide the string into two substring (Continuoes) such that number of open and closing bracket should be same in both substring with same type, you can use ? as a wild card to satisfy either opening or closing bracket of any type.
*
* eg:- ][?)?[

* there is two ways to split this string
* 1st way :-
* 1st string :-][() replace que mark with round open bracket
* 2nd string:-][ replace que mark with closing square bracket
* 2nd way :-
* 1st string :-][ replace que mark with round open bracket
* 2nd string:-()][ replace que mark with round open bracket,replace que mark with closing square bracket
***/

//    Time complexity is  Big O N^2  - due to the nested for loop

function fillMissingBrackets( s) {
      let strLen = s.length() ;
      let result = 0 ;
    // base case
    // if sting is not even then it cant be balanced.
     if ( strl % 2 != 0 ) { return result ; } 
     
     for ( let i = 2 ; i <n ; i +=2) {
        let s1 = s.slice(0, i) ;
        let s2 = s.slice( i, strLen)

        if ( isBalanced(s1) && isBalanced(s2) ) { 
            result++ ;
        } 

     }

     return result ;
}

const isBalanced = ( s ) => { 
    let squareBra = 0 ;
    let paraBra = 0 ;
    let queBra = 0 ;


    for ( char of  s) {
        if (char == "[" || char =="]") {
           squareBra += ( char == "[") ? 1 : -1 ;
      } else if (char == "(" || char ==")") {
        paraBra += ( char == "(") ? 1 : -1 ;
      } else
       queBra++ ;
    }

      let  diffBracketCount = Math.abs(squareBra)  + Math.abs(paraBra) ;

      /* if  brackets counts are balanced then Question marks should be zero.
       otherwise difference in number of brackets and "?"should be equal
       */

      if ( diffBracketCount == 0  && queBra == 0 ) {
         return true ;

        } else return diffBracketCount == queBra ; 
   
}

