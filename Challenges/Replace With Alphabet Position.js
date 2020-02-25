function alphabetPosition(text) {
    newText = text.toLowerCase();
    splitText = newText.split("");
    sortedText = [];
    alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    splitText.forEach(element =>{
      alphabet.forEach(letter =>{
        if ( letter === element){
          sortedText.push(alphabet.indexOf(letter) + 1);
        }
      })
    });
      
    
    return sortedText.join(" ");
  }