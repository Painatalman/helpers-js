/**
 * Wraps a function in order to log its return value
 * @param {Function} func The function to be wrapper
 * @return {Function} The wrapped function itself
 * @example <caption>Example for the wrapper function</caption>
 * function add(a, b) { return a + b }
 * var addAndLog = logAndReturn(add);
 * addAndLog(4, 4) // 8 is returned, ‘Result 8’ is logged
 * @link https://www.sitepoint.com/react-higher-order-components/
 */
export default function logAndReturn(func) {  
  return function() {  
    var args = Array.prototype.slice.call(arguments);
    var result = func.apply(null, args);
    console.log('Result', result);
    return result;
  }
}
