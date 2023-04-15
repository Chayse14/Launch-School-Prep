let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  const contains = (city,arr) => {
    for(let i = 0; i < arr.length; i +=1){
      if(arr[i] === city) return true;
    }
    return false;
  }

console.log(contains('Barcelona', destinations)); 
console.log(contains('Nashville', destinations)); 
