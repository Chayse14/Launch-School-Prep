const upperCaser = (string)=>{
  if(string.length >10){
    return string.toUpperCase()
  }
  else return string;
}

console.log(upperCaser("Tim Long"));
console.log(upperCaser('Mikayla Garrison'));

const capString = (string)=>{
  return string.length>10? string.toUpperCase():string;
}

console.log(capString("Everlea"));
console.log(capString("Everlea Garrison"))
