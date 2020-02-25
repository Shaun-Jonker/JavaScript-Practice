var number=function(array){
    var list = [];
    for (let i = 0; i < array.length; i++){
      list.push((i + 1) + ": " + array[i])
    }
    
    return list
  
  }