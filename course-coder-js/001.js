/* 
    1 - Make a simple counter using arrow function
    2 - Add a start and an end to the counters
    3 - Incrementing a range
    4 - Inverting
    5 - Handling positions
*/

const counter = (nums) => {
  let total = [];
  for (let i = 1; i <= nums; i++) {
    total.push(i);
  }
  return total;
};

const counter2 = (start, end) => {
  let total = [];
  for (let i = start; i <= end; i++) {
    total.push(i);
  }
  return total;
};

const counter3 = (start, end, range) => {
  let total = [];
  for (let i = start; i < end; i += range) {
    total.push(i);
  }
  return total;
};

const counter4 = (start, end) => {
  let total = [];
  for (let i = start; i >= end; i--) {
    total.push(i);
  }
  return total;
};

const counter5 = (start, end, range) => {
  let total = [];
  for (let i = start; i >= end; i -= range) {
    if (i < end) break;
    total.push(i);
  }
  return total;
};

console.log(counter(5));
console.log(counter2(6, 11));
console.log(counter3(10, 19, 2));
console.log(counter4(6, 2));
console.log(counter5(8, -3, 4));
