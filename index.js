// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Memoization</h1>`;

/**
 * Generic Memoization function
 * @param pure function
 * @return decorated Memorized function
 */
function memoize(fn) {
  let cache = {};
  return (...args) => {
    const key = [...args].join('+');
    if (cache.hasOwnProperty(key)) {
      //console.log('cached', key);
      return cache[key];
    } else {
      //console.log('computed', key);
      cache[key] = fn(...args);
      return cache[key];
    }
  };
}

function sum(a, b) {
  return a + b;
}

var sum = memoize(sum);

/*console.log(sum(2, 3));
console.log(sum(4, 5));
console.log(sum(2, 3));*/

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

//console.log(fibonacci);

let computedStart = performance.now();
console.log('Computed - fibonacci 10 = ', fibonacci(10));
console.log('Computed - fibonacci 15 = ', fibonacci(15));
let computedEnd  = performance.now();

let computedTime = computedEnd - computedStart;
console.log('Computed Time ',computedTime ,'ms');


var fibonacci = memoize(fibonacci);

//console.log(fibonacci);

let cachedStart  = performance.now();
console.log('Memoized - fibonacci 10 = ', fibonacci(10));
console.log('Memoized - fibonacci 15 = ', fibonacci(15));
let  cachedEnd  = performance.now();

let cachedTime = cachedEnd - cachedStart;
console.log('Cached Time ',cachedTime ,'ms');

let cachedPerf = 100 - (cachedTime / computedTime * 100);

console.log(Math.floor(cachedPerf), '%  decrease by Memoization');
