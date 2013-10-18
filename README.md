
# iterate

super simple iterator component

## Installation

Install with [component(1)](http://component.io):

```sh
$ component install CamShaft/iterate
```

Install with npm

```sh
$ npm install CamShaft/iterate
```

## API

```js
var iterate = require('iterate');

iterate(10, function(i) {
  console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
});

var fn = iterate(5);

fn(function(i) {
  console.log(i); // 0, 1, 2, 3, 4
});
fn(function(i) {
  console.log(i); // 0, 1, 2, 3, 4
});

var random = iterate(function() {
  return Math.floor(Math.random());
})

random(function(i) {
  console.log(i); // 0, 1, 2, 3, ... N
});
```

## License

MIT
