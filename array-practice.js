const findMinimum = arr => {
// Time Complexity: O(n) -> since we are iterating
// Space complexity: 0(1) -> since variables do not increase with the input size.
let min = arr[0]
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i]
  }
}
return min
};

const runningSum = arr => {
// We need to add the sum = [0] + [1]
// Then retain the sum of the previous number
// Add the new sum to the element at next index 


// Time complexity: O(n) since we are iterating
// Space complexity: O(n) since the size of new array changes relative to input size.

if (arr.length === 0) {
  return []
}
let result = [arr[0]]
for (let i = 1; i < arr.length; i++) {
  result.push(result[i-1] + arr[i])
}
return result
};

const evenNumOfChars = arr => {
// Time complexity: O(n) since we are iterating
// Space complexity 0(1) since we are reassigning a variable.

let sum = 0
arr.filter((el => {
if (el.length % 2 === 0) {
   sum+=1
}
}))
return sum
};

const smallerThanCurr = arr => {
// We need to divide elements in array by 2
// If element === 3 then stay the same?
// If element === 1 then subtract 1


// Time complexity: is 0(n) since we are iterating over an array
// Space complexity: is 0(n) since we are making a new array that increases with the input size.


let array = []
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2 === 0) {
array.push(arr[i]/2);
}
else if (arr[i] === 1) {
  array.push(arr[i] - 1)
}
else {
  array.push(arr[i])
}
}
return array
};

const twoSum = (arr, target) => {
// Do any of the products of the array elements === target
// Add each elemnt to each other using a nested loop.

// time complexity: 0(n^2) since it is iterating twice with elements of the two for loops being added and exponentially increasing.
// space complexity: is 0(1) since we return Boolean
for (let i = 0; i < arr.length; i++) {
  for (let j = i +1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
        return true
      }
    }
}
return false
};

const secondLargest = arr => {
//  Find the second largest digit in arrays

// Time Complexity: 0(log(n)) since sort is log 
// Sapce complexity: 0(1) is caused by input size staying the same with funciton output.

if (arr.length === 0 || arr.length === 1) {
  return undefined
}
let sort = arr.sort()
if (sort.length === 2) {
  return arr[0]
}
let secondNum;
for (let i = sort.length-1; i >= 0; i--) {
secondNum = sort[sort.length-2]
}
return secondNum
};

const shuffle = (arr) => {
// Time complexity: Math. random() method is O(1), generating a random num is constant, iterating is O(n).
// The functino's time complexity is O(n)
// Space complexity: O(1) since the data structures are not increasing relative to the input size.

  // We need to make a copy of array
  const shuffledArray = [...arr];

  // Random numbers in array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
}


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
