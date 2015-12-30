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

