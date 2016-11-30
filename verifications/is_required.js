/**
 * Is Required (for parameters)
 * @module verifications/isRequired
 */

/** This is to be used by a function in place of a required parameter. This technique was presented by Kyle Simpson and David Walsh, as recommended by [cmwd](http://cmwd.github.io/).
 * @example
 * @link https://davidwalsh.name/javascript-function-parameters
 */
module.exports = function isRequired(){ throw new Error('param is required'); }