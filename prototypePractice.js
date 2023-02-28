//Array.prototype.map()
Array.prototype.myMap = function(callback, arg) {
    let arr = this;
    let mappedArray = [];

    for(let i=0; i<arr.length; i++) {
        let mappedValue = callback.call(arg,arr[i]);
        mappedArray.push(mappedValue);
    }
    return mappedArray;
}

// let arr = [1, 2, 3];
// let mappedArray = arr.myMap((value) => value * 2);
// console.log(mappedArray); 
// Output: [2, 4, 6]

// Array.prototype.reduce()
Array.prototype.Myreduce = function(callback, initialValue) {
    let arr = this;
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    for(let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  
    return accumulator;
  };

// let arr1 = [1, 2, 3];
// let sum = arr1.Myreduce((accumulator, value) => accumulator + value, 0);
// console.log(sum); 
// Output: 6