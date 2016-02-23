/**
 * Normalize a selector string, a single DOM element or an array of elements into an array of DOM elements.
 * @author Whoever is in charge of the Transformicons Library
 * @private
 *
 * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements
 * @returns {array} Array of DOM elements
 */
function getElementList(elements) {
   if (typeof elements === 'string') {
     return Array.prototype.slice.call(document.querySelectorAll(elements));
   } else if (typeof elements === 'undefined' || elements instanceof Array) {
     return elements;
   } else {
     return [elements];
   }
 }
