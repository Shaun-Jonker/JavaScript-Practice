function stray([firstNum, secondNum, ...numbers]) {
    if (firstNum !== secondNum){
      const thirdNum = numbers[0];
      return secondNum === thirdNum ? firstNum : secondNum
    }
    for (var nextNum of numbers){
      if (firstNum !== nextNum){
        return nextNum
      }
    }
  }