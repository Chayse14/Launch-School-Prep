const evenOrOdd = (arg)=>{
  if(!Number.isInteger(arg)){
    console.log('Sorry the value you passed is not an intger.')
    return;
  }
  if(arg%2==0){
    return "arg is even";
  }
  else return "arg is odd"
}

console.log(evenOrOdd(6));