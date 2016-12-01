# memoize-proxy

[![flipactual](https://img.shields.io/badge/😋-flipactual-218AC7.svg?style=flat-square)](https://www.flipactual.com/)
[![Travis](https://img.shields.io/travis/flipactual/memoize-proxy.svg?style=flat-square)](https://travis-ci.org/flipactual/memoize-proxy/)
[![Codecov](https://img.shields.io/codecov/c/github/flipactual/memoize-proxy.svg?style=flat-square)](https://codecov.io/gh/flipactual/memoize-proxy/)
[![Node](https://img.shields.io/node/v/memoize-proxy.svg?style=flat-square)](http://npmjs.com/package/memoize-proxy)
[![NPM](https://img.shields.io/npm/v/memoize-proxy.svg?style=flat-square)](http://npmjs.com/package/memoize-proxy)

Memoize functions

<a name="MemoizeProxy"></a>

## MemoizeProxy(functionToProxy) ⇒ <code>proxy</code>
MemoizeProxy - provides a proxy for memoizing functions

**Kind**: global function  
**Returns**: <code>proxy</code> - the proxy to that function  

| Param | Type | Description |
| --- | --- | --- |
| functionToProxy | <code>function</code> | the function to proxy |

**Example**  
```js
let fib = n => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
fib = new MemoizeProxy(fib);
fib(100);
```

## Scripts

### `test` – run the tests

```sh
npm run test
```

### `coverage` – generate and view code coverage as HTML

```sh
npm run coverage
```

### `lint` – lint the codebase

```sh
npm run lint
```

### `readme` – generate the README

```sh
npm run readme
```

### `compile` – compile the code

```sh
npm run compile
```

## License

MIT @ [Flip](https://github.com/flipactual)
