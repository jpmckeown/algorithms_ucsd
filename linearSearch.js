let A = ["William", "James", "Benjamin", "Oliver", "Lucas", "Henry", "Alexander", "Ethan", "George", "Michael", "Daniel", "Jacob"];
let k = "Daniel";
let Not_Found = -1;

// recursiive algorithm needs base cases
// describing recurrence relation often usefyul

function linearSearch(arr, low, high, key) {
   if (high < low) {
      return Not_Found
   }
   if (arr[low] == key) {
      return low
   }
   return linearSearch(arr, low+1, high, key)
}


console.log(linearSearch(A, 0, A.length-1, k));
console.log(linearSearch(A, 0, A.length-1, "Peter"));
