// algorithm only copes with single-digit numbers!
const digits = [2, 7, 5, 11, 9];

function largestConcatenate(num) {
   let result = "";
   let maxNum, maxNumIndex;

   while (num.length > 0) {
      maxNum = Math.max(...num); // max expects list not array
      maxNumIndex = num.indexOf(maxNum);
      result += maxNum;

      num.splice(num.indexOf(maxNum), 1);
      console.log(maxNum, maxNumIndex, num);
   }
   return result;
}

console.log(largestConcatenate(digits));
