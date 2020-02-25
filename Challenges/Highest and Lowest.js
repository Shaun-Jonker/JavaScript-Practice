function highAndLow(numbers){
    let numArr = numbers.split(" ");
    let stringArr = [];
    let finalArr = [];
      numArr.forEach(element =>{
        stringArr.push(parseInt(element, 10))
            
        
      });
      let min = Math.min(...stringArr)
        let max = Math.max(...stringArr)
        finalArr.push(max, min);
      
      return finalArr.join(' ')
  }