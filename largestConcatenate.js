// algorithm only copes with single-digit numbers!
let digits = [2, 7, 5, 1, 9];

function largestConcatenate(num) {
   let result = "";
   let maxNum, maxNumIndex;

   while (num.length > 0) {
      maxNum = Math.max(...num); // max expects list not array
      maxNumIndex = num.indexOf(maxNum);
      result += maxNum;

      num.splice(num.indexOf(maxNum), 1);
      // console.log(maxNum, maxNumIndex, num);
   }
   return result;
}


function largestConcatenateRecursive(num) {
   // console.log(num.length, num);
   let maxNum, maxNumIndex;

   if (num.length === 0) {
      return "";
   }
   maxNum = Math.max(...num);
   maxNumIndex = num.indexOf(maxNum);
   num.splice(num.indexOf(maxNum), 1);

   return maxNum + largestConcatenate(num);
}


console.log(largestConcatenate(digits));
// cannot call both unless digits initialised again
digits = [2, 7, 5, 1, 9];

console.log(largestConcatenateRecursive(digits));
