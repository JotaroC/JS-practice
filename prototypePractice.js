//Array.prototype.map()
Array.prototype.myMap = function (callback, arg) {
  let arr = this;
  let mappedArray = [];

  for (let i = 0; i < arr.length; i++) {
    let mappedValue = callback.call(arg, arr[i]);
    mappedArray.push(mappedValue);
  }
  return mappedArray;
}

// let arr = [1, 2, 3];
// let mappedArray = arr.myMap((value) => value * 2);
// console.log(mappedArray); 
// Output: [2, 4, 6]

// Array.prototype.reduce()
Array.prototype.Myreduce = function (callback, initialValue) {
  let arr = this;
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
};

// let arr1 = [1, 2, 3];
// let sum = arr1.Myreduce((accumulator, value) => accumulator + value, 0);
// console.log(sum); 
// Output: 6


// Create a function that everytime you invoke it, it will print out the message "Congrats you earn the chance!", 
// however it can only print out the message with the first 5 excutions. all the rest invoke will print out the message "Sorry you missed the chance"
function printMsg() {
  if (printMsg.count === undefined) {
    printMsg.count = 5; // initialize the count property
  }

  if (printMsg.count > 0) {
    console.log('Congrats you earn the chance!');
    printMsg.count--;
  } else {
    console.log('Sorry you missed the chance');
  }
}
// printMsg()
// printMsg()
// printMsg()
// printMsg()
// printMsg()
// printMsg()
// printMsg()

// Filter an Array with a user input of minimum length
const arr1 = ["123123", "123", "451511", "422"];

const cb = function (minLength) {
  return function (item) {
    return item.length >= minLength
  }
}
// console.log(arr1.filter(cb(5)))