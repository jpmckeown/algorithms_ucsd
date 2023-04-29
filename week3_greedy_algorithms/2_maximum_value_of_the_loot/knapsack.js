// UCSD Algorithms coursera
// for unsorted data
let W = 20;
let n = 3;
let itemWeights = [[1, 10], [2, 5], [4, 3]];
let weights = [1, 2, 4];
let values = [10, 5, 3];
let valuePerWeight = [];

weights.reverse()
values.reverse()

for (let index = 0; index < weights.length; index++) {
   valuePerWeight[index] = values[index] / weights[index];
}
console.log(valuePerWeight);

// helper to find most valuable item by weight
function bestItem() {
   maxValueByWeight = 0;
   bestItemIndex = -1;
   for (let index = 0; index < n; index++) {
      if (weights[index] > 0) {
         if (valuePerWeight[index] > maxValueByWeight) {
            maxValueByWeight = valuePerWeight[index]
            bestItemIndex = index
         }
      }
   }
   return bestItemIndex
}

console.log(bestItem());
