/**
 * Get a random number between 0 and a number send in the parameter
 * @return {[type]} Returns a number between 0 and 1
 * 
 */
function getRandom(min, max, asInteger) {
  // Technically, the number returned by Math.random() could be 0, but will never be exactly 1.
  var result,
      min = min || 0;
      max = max || 1;
      asInteger = asInteger || true;

  // swap min and max if needed
  if (min > max) {
    var temp = max;
    min = max;
    max = temp;
  }

  var result = Math.random() * (max - min) + min;
}



