const catAge = (humanYears) => {
  if (humanYears == 1) return 15;
  if (humanYears ===2) return 24;
  else return 24 + (humanYears - 2) * 4;
}

console.log(catAge(2));
console.log(catAge(8));