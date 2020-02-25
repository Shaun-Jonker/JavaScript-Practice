function past(h, m, s){

    let hMilli = 3600000;
    let mMilli = 60000;
    let sMilli = 1000;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    
    if ( h != 0 ){
      hours = hMilli * h
    }
    
    if ( m != 0 ){
      minutes = mMilli * m
    }
    
    if ( s !=0 ){
      seconds = sMilli * s
    }
    
    return hours + minutes + seconds
  
  }