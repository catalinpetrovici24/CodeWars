// Find the stray number

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  return +numbers
    .filter((number) => numbers.indexOf(number) === numbers.lastIndexOf(number))
    .join('');
}

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));

// Solutions of Users I am Following

function stray(numbers) {
  for (var i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
}

const stray = (nums) => nums.reduce((a, b) => a ^ b);
