const test = require('ava');
const MemoizeProxy = require('../src');

test('Proxies a function', t => {
  t.plan(1);
  let fib = n => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
  fib = new MemoizeProxy(fib);
  t.is(fib(10), 89);
});
