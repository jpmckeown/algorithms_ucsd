// counting-sort

function generateRandomArray(max_integer, array_size) {
   var randomArray = [];
   for (var i = 0; i < array_size; i++) {
      randomArray.push(Math.floor(Math.random() * max_integer) + 1);
   }
   return randomArray;
}

let max_integer = 9;
let array_size = 100;
var randomArray = generateRandomArray(max_integer, array_size);
console.log(randomArray);

let count = new Array(max_integer + 1).fill(0);
for (var i = 0; i < array_size; i++) {
   count[randomArray[i]] += 1;
}
console.log(count);

