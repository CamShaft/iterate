/**
 * Expose the range function
 */

module.exports = range;

function range(min, count, fn) {
  if (typeof count === 'function') {
    fn = count;
    count = min;
    min = 0;
  }
  if (typeof count === 'undefined') {
    count = min;
    min = 0;
  }

  function loop(cb) {
    var counts = typeof count === 'function' ? count() : min + count;
    var results = [];
    for (var i = min; i < counts; i++) {
      results.push(cb(i));
    }
    return results;
  };

  if (fn) return loop(fn);
  return loop;
}
