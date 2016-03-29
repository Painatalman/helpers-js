/**
 * Converts an array-like object (like a list of nodes, or an argument list) into a list
 * @param  {Object} arrayLikeObject An array-like object
 * @return {Array}                 A list with similar content to the array-like object
 */
module.exports = function toArray(arrayLikeObject) {
  return [].slice.call(arrayLikeObject);
}
