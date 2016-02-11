'use strict';

/**
 * Adds specific state class to mouseover and mouseleave, based on a selector
 * @param  {string} selector     an element selector to be used by querySelectorAll
 * @param  {string} classOnHover the class that defines the "hovered" state
 */
function toggleHover(selector, classOnHover) {
  var
    elements = document.querySelectorAll(selector),
    classOnHover = classOnHover || 'is-hover';

  for (var i=0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function(){
      this.classList.add(classOnHover);
    });
    elements[i].addEventListener('mouseleave', function(){
      this.classList.remove(classOnHover);
    });
  }
}

/**
 * Modals should be on a top-level position in order to render properly. This function moves all "modals" with a default "modal" class to the bottom of the document body. However, it accepts other querySelectors.
 * @param  {String} modalQuerySelector "A query selector for modals"
 */
function moveModalsToBodyEnd(modalQuerySelector, modalQuerySelectorException) {
  var
    defaultSelector = modalQuerySelector || ".modal",
    selector = modalQuerySelectorException ?
      defaultSelector + ":not(" + modalQuerySelectorException + ")"
      : defaultSelector;
  var elements = document.querySelectorAll(selector);
  [].forEach.call(elements, function appendElement(element) {
      document.body.appendChild(element);
    }
  );
}

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

 /**
  * Normalize a selector string, a single DOM element or an array of elements into an array of DOM elements.
  * @author Whoever is in charge of the Transformicons Library
  * @private
  *
  * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements
  * @returns {array} Array of DOM elements
  */
  var getElementList = function (elements) {
    if (typeof elements === 'string') {
      return Array.prototype.slice.call(document.querySelectorAll(elements));
    } else if (typeof elements === 'undefined' || elements instanceof Array) {
      return elements;
    } else {
      return [elements];
    }
  };
