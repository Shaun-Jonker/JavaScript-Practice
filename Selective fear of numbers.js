var AmIAfraid = function(day, num){
    switch (day){
      case 'Monday':
        if ( num === 12 ){
          return true
        } else{
            return false
        }
        break;
        
      case 'Tuesday':
        if ( num > 95 ){
          return true
        }else{
            return false
        }
        break;
      
      case 'Wednesday':
        if (num === 34){
          return true
        }else{
            return false
        }
        break;
        
      case 'Thursday':
        if (num === 0){
          return true
        }else{
            return false
        }
        break;
        
      case 'Friday':
        if (num % 2 === 0){
          return true
        }else{
            return false
        }
        break;
        
      case 'Saturday':
        if (num === 56){
          return true
        }else{
            return false
        }
        break;
      
      case 'Sunday':
        if (num === 666 || num === -666){
        return true
        }else{
            return false
        }
        break;
      
      default:
        return false
    }
  }