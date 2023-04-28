// template by Alexander Nikolskiy
// Fibonacci calculation by JPM

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
  console.log(fib(parseInt(line, 10)));
  process.exit();
}

function fib(n) {
  let fibonacci = [0, 1];
  for (let index = 2; index <= n; index++) {
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
  }
  return fibonacci[n]
}

module.exports = fib;
