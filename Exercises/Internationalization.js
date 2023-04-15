const greeter = (greet) =>{
  switch(greet){
    case 'en':
      return 'Hi!';
      break;
    case 'fr':
      return 'Salut!';
      break;
    case 'pt':
      return 'Ola!';
      break;
    case 'de':
      return 'Hallo!';
    case 'sv':
      return 'Hej!';
      break
    case 'af':
      return 'Haai!'    
  }
}

console.log(greeter('pt'));
console.log(greeter('af'));
