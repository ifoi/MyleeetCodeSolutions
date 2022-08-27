// longest Substring 

function stringPeriod(str) {
    let substring = "" ;

    if (str.length > 1) {
        for (let i = 2; i < Math.cel(str.length/2); i++) {
            substring = str.slice(0,i) ;
            const repeated = substring.repeat(str.length/i) ;
            
            if ( str == repeated ) {
                return substring ;
            } 
                
        }
    }

    return "-1" ; 
}

function ArrayAdditionI(arr) { 
    var greatest = 0;
    var index = 0;
    var sum = 0;
  
    for (var i = 0; i<arr.length; i++){
      if (arr[i] > greatest){
        greatest = arr[i];
        index = i;
      }
    }
      arr.splice(index,1)
        for (var i = 0; i<arr.length; i++){
          sum += arr[i];
          if (greatest = sum){
            return true;
          }else{
            return false;
          }
        }
    }
  
  console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3]))