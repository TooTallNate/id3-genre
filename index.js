
/**
 * Module exports.
 */

exports = module.exports = genre;
exports.genres = require('./genres');

/**
 * `genre()` function.
 *
 * @api public
 */

function genre (val) {
  if ('number' == typeof val) return toString(val);
  if ('string' == typeof val) return toByte(val);
  throw new TypeError('expected a "string" or "number" genre value');
}

/**
 * Converts genre byte number to genre String.
 *
 * @api public
 */

function toString (num) {
  return exports.genres[num] || 'Unknown';
}

/**
 * Converts genre string name to a genre byte Number.
 *
 * @api public
 */

function toByte (str) {
  var index = exports.genres.indexOf(str);
  return -1 === index ? null : index;
}
