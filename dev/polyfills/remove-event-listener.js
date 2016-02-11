/**
 * removeEventListener polyfill
 * @param  {element} node     element related to the listener
 * @param  {string} event    event type
 * @param  {function} listener the listener function
 * @author React Starter Kit (https://www.reactstarterkit.com/)
 */
function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}
