/**
 * MemoizeProxy - provides a proxy for memoizing functions
 *
 * @example
 * let fib = n => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
 * fib = new MemoizeProxy(fib);
 * fib(100);
 *
 * @param  {function} functionToProxy the function to proxy
 * @return {proxy}                    the proxy to that function
 */
function MemoizeProxy(functionToProxy) {
  return new Proxy(functionToProxy, {
    memo: new Map(),
    apply(t, n, a) {
      let result = this.memo.get(a[0]);
      if (result) {
        return result;
      }
      result = t.apply(this, a);
      this.memo.set(a[0], result);
      return result;
    },
  });
}

module.exports = MemoizeProxy;
