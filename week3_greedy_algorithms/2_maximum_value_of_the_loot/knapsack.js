// UCSD Algorithms coursera
// for unsorted data

let W = 5; // capacity of knapsack

let n = 3;
// let itemWeights = [[1, 10], [2, 8], [4, 6]];
let weights = [1, 2, 4];
let values = [10, 8, 6];
let valuePerWeight = [];

// weights.reverse();
// values.reverse();

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
            maxValueByWeight = valuePerWeight[index];
            bestItemIndex = index;
         }
      }
   }
   return bestItemIndex;
}


function knapsack() {
   amounts = [0, 0, 0];
   totalValue = 0;
   for (let index = 0; index < weights.length; index++) {
      if (W == 0) {
         return [totalValue, amounts];
      }
      i = bestItem();
      a = Math.min(weights[i], W);
      totalValue += a * valuePerWeight[i];
      weights[i] -= a;
      amounts[i] += a;
      W = W - a;
   }
   return [totalValue, amounts];
}


// pre-sorted itesm for decreasing valuePerWeight
function knapsackFast() {
   amounts = [0, 0, 0];
   totalValue = 0;
   for (let i = 0; i < weights.length; i++) {
      if (W == 0) {
         return [totalValue, amounts];
      }
      a = Math.min(weights[i], W);
      totalValue += a * valuePerWeight[i];
      weights[i] -= a;
      amounts[i] += a;
      W = W - a;
   }
   return [totalValue, amounts];
}


//console.log(bestItem());
// console.log(knapsack());
console.log(knapsackFast());
