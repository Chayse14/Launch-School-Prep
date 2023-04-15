const capitalize = (string) => {
  let result = string.split(' ');
  let capitalString = [];

  for (let i = 0; i < result.length; i+=1) {
    let word = result[i];
    capitalString.push(word[0].toUpperCase() + word.slice(1));
  }
  return capitalString.join(' ');
}

console.log(capitalize('launch school tech & talk'));