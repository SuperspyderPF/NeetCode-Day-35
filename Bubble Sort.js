function bubbleSort(a) {
    let s = 0;
    for(let i = 0; i < a.length - 1; i++){
      if(a[i] > a[i + 1]){
        [a[i], a[i + 1]] = [a[i+1], a[i]]
        s++
      }
    }
    return s === 0  ? a : bubbleSort(a)
  }


  //one line:
  BBS=a=>{s = 0;for( i = 0; i < a.length - 1; i++){ if(a[i] > a[i + 1]){[a[i], a[i + 1]] = [a[i+1], a[i]];s++}}return s === 0  ? a : BBS(a)}
     
    
     
        
        

  a=[1,87,6,3,6,1,2]
  alert(BBS(a))

//[5,3,13,2,11,4,7]
//[3,5,13,2,11,4,7]
//[3,5,2,13,11,4,7]
//[3,5,2,11,13,4,7]
//[3,5,2,11,4,13,7]
//[3,5,2,11,4,7,13]

