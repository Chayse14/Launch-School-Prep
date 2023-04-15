const sumOfSquares = (numbers) =>{
  return numbers.reduce((acc,curr)=>{
    return acc+curr*curr;
  }, 0);
}

let array = [3,5,7];
console.log(sumOfSquares(array));