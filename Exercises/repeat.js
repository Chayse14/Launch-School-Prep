const repeat = (num,string) => {
  let result = '';
  while(num > 0){
    result+=string;
    num-=1;
  }
  return result;
}


console.log(repeat(3, 'ha')); // 'hahaha'