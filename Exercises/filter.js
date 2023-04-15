let scores = [96, 47, 113, 89, 100, 102];
let aboveHundred = scores.filter(el => {
  if (el > 100)
  return el;
})

console.log(scores);
console.log(aboveHundred);