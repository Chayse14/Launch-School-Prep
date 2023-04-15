const factorial = (number) =>{
  let result = 1;
  for(let count = number; count > 0; count -=1){
    result*=count;
  }
  return result;
}