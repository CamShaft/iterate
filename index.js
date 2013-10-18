/**
 * Expose the iterator function
 */

module.exports = iterate;

function iterate(count, fn) {
  function loop(cb) {
    var counts = typeof count === 'function' ? count() : count;
    for (var i = 0; i < counts; i++) {
      cb(i);
    }
  };

  if (fn) return loop(fn);
  return loop;
}
