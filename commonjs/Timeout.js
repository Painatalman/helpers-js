/**
 * Timeout object based on // http://stackoverflow.com/questions/5226578/check-if-a-timeout-has-been-cleared
 *
 * @param {Function} fn       callback function
 * @param {Number}   interval time in milliseconds
 * @author http://stackoverflow.com/questions/5226578/check-if-a-timeout-has-been-cleared
 * @url // http://stackoverflow.com/questions/5226578/check-if-a-timeout-has-been-cleared
 */
module.exports = function Timeout(fn, interval) {
    var
      id,
      cleared = true;

    Timeout.prototype.clear = function clear() {
        cleared = true;
        clearTimeout(id);
    };

    Timeout.prototype.isCleared = function isCleared() {
      return cleared;
    }

    Timeout.prototype.start = function start() {
      cleared = false;
      setTimeout(fn, interval);
    }


}
