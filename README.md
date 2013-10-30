
# range-fn

simple range component with a callback

## Installation

Install with [component(1)](http://component.io):

```sh
$ component install CamShaft/range-fn
```

Install with npm

```sh
$ npm install CamShaft/range-fn
```

## API

```js
var range = require('range-fn');

range(10, function(i) {
  console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
});

var fn = range(5);

fn(function(i) {
  console.log(i); // 0, 1, 2, 3, 4
});
fn(function(i) {
  console.log(i); // 0, 1, 2, 3, 4
});

var random = range(function() {
  return Math.floor(Math.random());
})

random(function(i) {
  console.log(i); // 0, 1, 2, 3, ... N
});
```

## License

MIT
