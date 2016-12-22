/**
 *  A higher order function that returns a scrollToTop function when called
 *  @module animations/scrolltotop
 *  @author Paul Underwood
 *  @see {@link https://dzone.com/articles/back-to-top-pure-javascript}
 *  @return {function} A function with a timeOut as its closure, in order to work
 *  @example
 *  var scrollToTop = require('./helpers/animations/scrolltop')();
 *  scrollToTop();
 */
module.exports = function scrollToTopWrapper() {
  var timeOut;
  
  return function scrollToTop() {
    if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0) {
      window.scrollBy(0, -30);
      timeout = setTimeout(scrollToTop, 10);
    } else {
      clearTimeout(timeOut);
    }
  }
}