// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    var max = Math.max.apply(null, ages);
    ages.splice(ages.indexOf(max),1);
    
    var sMax = Math.max.apply(null, ages);
    var oldest = []
    oldest.push(sMax, max);
    return oldest
  }