/**
 * addEventListener polyfill
 * @param {element} node     element related to the listener
 * @param {string} event    event type
 * @param {function} listener the listener function
 * @author React Starter Kit (https://www.reactstarterkit.com/)
 */
function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}
