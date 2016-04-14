/**
 * Event handler object for improved event removal.
 * @link http://www.jstips.co/en/DOM-event-listening-made-easy/
 * @param  {string options}  eventName    The event type related to the handler, like "click" or "mouseout"
 * @param  {DOM node}  onElement   Element node
 * @param  {Function}  withCallback Callback function
 * @param  {Boolean}  useCapture   defines whether the event listener should be triggered on capture phase or not. False by default, like a regular addEventListener
 * @param  {Object} thisArg      The context value that will be bound to this
 * @return {Object}               The object that allows for event listener removal. The addition of the event listener is done by default on function call
 * @ example
// Anytime you need
const handleClick = handleEvent('click', {
  onElement: element,
  withCallback: (event) => {
    console.log('Tada!')
  }
})

// And anytime you want to remove it
handleClick.destroy()
 */
function handleEvent (eventName, {onElement, withCallback, useCapture = false} = {}, thisArg) {
  const element = onElement || document.documentElement

  function handler (event) {
    if (typeof withCallback === 'function') {
      withCallback.call(thisArg, event)
    }
  }

  handler.destroy = function () {
    return element.removeEventListener(eventName, handler, useCapture)
  }

  element.addEventListener(eventName, handler, useCapture)
  return handler
}
