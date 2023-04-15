// declare functino objOfMatches with two arrs and a callback arg
const objOfMatches = (arr1,arr2,callback) => {
  // invoke reduce on arr1 iterate thru the arr1
	return arr1.reduce((acc,curr,index) => {
  // ternary operator to iterate thru the curr with callback invoked
    // if callback on arr1 = callback on arr2 arr1 el is key arr2 key is // the value
    if(callback(curr)==callback(arr2[index])){
      acc[curr]=arr2[index];
    }
    return acc;
  }, {})
}

// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
