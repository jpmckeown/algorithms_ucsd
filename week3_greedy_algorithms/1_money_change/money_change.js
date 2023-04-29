// must be pre-sorted with highest first
// const denominations = [25, 10, 5, 1];

// greedy algorithm can fail e.g. give 8 change using
const denominations = [6, 4, 1];


function minimumNumberOfCoins(moneyChange) {
   let count = 0;
   for (let i = 0; i < denominations.length; i++) {
       count += Math.floor(moneyChange / denominations[i]);
       moneyChange %= denominations[i];
   }
   return count;
}


function getMinimumCoins(moneyChange) {
   const coins = [];
   for (let i = 0; i < denominations.length; i++) {
       while (moneyChange >= denominations[i]) {
           coins.push(denominations[i]);
           moneyChange -= denominations[i];
       }
   }
   return coins;
}


console.log(minimumNumberOfCoins(8));
console.log(getMinimumCoins(8));
