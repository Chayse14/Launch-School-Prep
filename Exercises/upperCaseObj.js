let obj = {
  b: 2,
  a: 2,
  c: 3,
};

const objArr=Object.keys(obj);
let uppercaseKeys = objArr.map(el=>{
  return el.toUpperCase();
})
console.log(uppercaseKeys)
console.log(obj);
