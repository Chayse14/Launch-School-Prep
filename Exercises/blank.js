const isBlank = (char) => {
  if(char.length === 0) return true;
  else return false;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true