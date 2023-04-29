function segmentsCoverPoints(data, segmentLength) {
   let n = data.length;
   let segments = [];
   let leftIndex = 1;
   let left, right;

   while (leftIndex <= n) {
      left = data[leftIndex];
      right = data[leftIndex] + segmentLength;
      segments.push([left, right]);
      leftIndex += 1;
      while (leftIndex <= n && data[left] <= right) {
         leftIndex += 1;
      }
   }
   return segments;
}


// from OpenAI
function minimumLengthSegmentCover(points, L) {
   let left = points[0];
   let segments = [];

   for (let i = 1; i < points.length; i++) {
      if (points[i] - left > L) {
         segments.push([left, points[i - 1]]);
         left = points[i - 1];
      }
   }
   segments.push([left, points[points.length - 1]]);
   return segments;
}


let points = [3.5, 4, 4, 5, 6, 6.5, 7, 8]
console.log(points.length);

// returns boundaries of minimum segments
console.log(minimumLengthSegmentCover(points, 2));

console.log(segmentsCoverPoints(points, 2));
