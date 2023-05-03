let arr = [
   6, 38, 23, 18, 11, 36, 1, 21, 16, 22,
   7, 3, 33, 32, 30, 28, 34, 4, 9, 2,
   20, 37, 19, 35, 12, 24, 15, 14, 17, 26,
   25, 31, 13, 39, 5, 27, 40, 8, 29, 10
];

// only works if array pre-sorted
arr.sort(function(a, b){return a - b});
console.log(arr);

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

let mid, low, high;

// recursive algorithm 
function binarySearch(arr, low, high, seek) {
   if (high < low) return low - 1;
   let mid = Math.floor(low + (high - low) / 2);

   console.log(mid, low, high);

   if (seek == arr[mid]) {
      return mid;
   }
   else if (seek < arr[mid]) {
      return binarySearch(arr, low, mid - 1, seek);
   }
   else {
      return binarySearch(arr, mid + 1, high, seek);
   }
}


// iterative algorithm
function binarySearchIterate(arr, low, high, seek) {
   while (low <= high) {
      mid = Math.floor(low + ((high - low) / 2));
      console.log(`Mid`, mid, `There`, arr[mid], `Low`, low, `High`, high);

      if (seek === arr[mid]) {
         return mid;
      }
      else if (seek < arr[mid]) {
         high = mid - 1;
      }
      else {
         low = mid + 1;
      }
   }
   return low - 1;
}

arr = primes;
low = 0;
high = arr.length - 1;
let seek = 42;

// let result = binarySearch(arr, 0, arr.length - 1, 9);
let result = binarySearchIterate(arr, low, high, seek);
console.log(arr[result], 'Index', result);

// let arr = [];
// while (arr.length < 40) {
//    let r = Math.floor(Math.random() * 40) + 1;
//    if (arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);
