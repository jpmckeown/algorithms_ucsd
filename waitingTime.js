function minimumWaitingTimeGreedyUnsorted(queries) {
   let totalWaitingTime = 0;
   let nextWaitingTime = 0;
   const treatedPatients = new Array(queries.length).fill(0);
   for (let i = 0; i < queries.length; i++) {
      let shortestTimeIndex = -1;
      for (let j = 0; j < queries.length; j++) {
         if (treatedPatients[j] === 0 && (shortestTimeIndex === -1 || queries[j] < queries[shortestTimeIndex])) {
            shortestTimeIndex = j;
         }
      }
      const duration = queries[shortestTimeIndex];
      treatedPatients[shortestTimeIndex] = 1;
      totalWaitingTime += nextWaitingTime;
      nextWaitingTime += duration;
   }
   return totalWaitingTime;
}


function minimumWaitingTimeGreedyUCSD(queries) {
   let n = queries.length;
   let totalWaitingTime = 0;
   let shortestTimeIndex = -1;
   const INFINITY = 999999999;

   const treatedPatients = new Array(n).fill(0);

   for (let i = 0; i < n; i++) {
      t_min = INFINITY;
      let shortestTimeIndex = 0;

      for (let j = 0; j < n; j++) {
         if (treatedPatients[j] === 0 && queries[j] < t_min) {
            t_min = queries[j];
            shortestTimeIndex = j;
         }
      }
      // adding -1 makes result same as OpenAI code, but why?
      totalWaitingTime += (n - i - 1) * t_min;
      treatedPatients[shortestTimeIndex] = 1;
   }
   return totalWaitingTime;
}


// OpenAI version correct according to my manual check = 9
console.log(minimumWaitingTimeGreedyUnsorted([3, 2, 1, 2]));

// my implementation of UCSD algorithm = 17, which is wrong
console.log(minimumWaitingTimeGreedyUCSD([3, 2, 1, 2]));
