
/**
 * jQuery version of a scroll to top animation
 * @param  {string} elementSelector query selector, as used by jQuery or querySelector
 * @param  {string|number} speed   animation speed in a jQuery-supported format, like "slow", 6000, or "60s"
 * @param  {[type]} event           event type associated to the element(s) that trigger the scroll animation. It is "click" by default
 * @todo Test
 * @link http://www.catswhocode.com/blog/10-jquery-snippets-for-efficient-web-development
 */
module.exports = function $scrollTop(elementSelector, speed, event) {

var elementSelector =
// check for jquery support?
$(elementSelector).on(event, function() {
  $("html, body").animate({ scrollTop: 0 }, speed);
  return false;
});
}
