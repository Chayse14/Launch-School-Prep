const greet = (languageCode) => {
  switch (languageCode) {
    case'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Hola!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

const localeGreet = (locale) => {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);
  switch(region){
    case "US": return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}

const extractLanguage = (locale) => {
  return locale.split('_')[0];
}

const extractRegion = (locale) => {
  return locale.split('.')[0];
         locale.split('_')[1]; 
}

console.log(localeGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localeGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localeGreet('fr_MA.UTF-8')); // 'Salut!')