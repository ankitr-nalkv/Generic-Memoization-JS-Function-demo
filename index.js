// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function memoize(fn) {
  let cache = {};
  return (...args) => {
    const key = [...args].join('+');
    if (cache.hasOwnProperty(key)) {
      console.log('cached', key);
      return cache[key];
    } else {
      console.log('computed', key);
      cache[key] = fn(...args);
      return cache[key];
    }
  };
}

function sum(a, b) {
  return a + b;
}

var sum = memoize(sum);

console.log(sum(2, 3));
console.log(sum(4, 5));
console.log(sum(2, 3));

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

var fibonacci = memoize(fibonacci);

console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(5));
