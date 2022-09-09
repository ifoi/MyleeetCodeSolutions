/**
 * 
 *  Find imbalance  input array or group of students[]
 * return result as an integer 
 */


function findImbalance( group){

     let sorted_rank = group.sort( (a,b)=> a -b)
       let imbalance = 0 ;     
     for ( let i; i< sorted_rank.lenght-1, i++ ) {
        if( sorted[i +1 ] -sorted_rank[i] > 1 ) {
             imbalance++   
        }
        
     }

     return imbalance
 }
