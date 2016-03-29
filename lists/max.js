/**
 * Maximum of a list of numbers in the array
 * @param  {Array} aList a list of elements
 * @return {number}       The maximum number in a list
 */
module.exports = function max(aList) {
    return aList.reduce(function(a, b){ return a > b ? a : b});
}
