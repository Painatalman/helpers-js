/**
 * Return current YEAR
 * @todo upgrade it to a "get current date" function
 * @return "{number} Year in the **** format"
 */
module.exports = function getCurrentYear() {
  return new Date().getFullYear();
}