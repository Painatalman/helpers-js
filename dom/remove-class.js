/**
 * Removes a class to a group of elements
 * @param {NodeList} elementsOrSelector List of Node elements the class will be added to
 * @param {string} myClass  The name of the class to be removed
 * @link https://www.sitepoint.com/add-remove-css-class-vanilla-js/
 */
module.exports = function removeClass(elementsOrSelector, myClass) {

  // if there are no elements, we're done
    if (!elementsOrSelector) { return; }

    // if we have a selector, get the chosen elements
    if (typeof(elementsOrSelector) === 'string') {
      elementsOrSelector = document.querySelectorAll(elementsOrSelector);
    }

    // if we have a single DOM element, make it an array to simplify behavior
    else if (elementsOrSelector.tagName) { elementsOrSelector=[elementsOrSelector]; }

    // create pattern to find class name
    var reg = new RegExp('(^| )'+myClass+'($| )','g');

    // remove class from all chosen elements
    for (var i=0; i<elementsOrSelector.length; i++) {
      elementsOrSelector[i].className = elementsOrSelector[i].className.replace(reg,' ');
    }
}
