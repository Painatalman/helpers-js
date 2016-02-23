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


