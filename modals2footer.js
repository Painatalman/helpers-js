/**
 * Modals should be on a top-level position in order to render properly. This function moves all "modals" with a default "modal" class to the bottom of the document body. However, it accepts other querySelectors.
 * @param  {String} modalQuerySelector "A query selector for modals"
 */
module.exports = function moveModalsToBodyEnd(modalQuerySelector) {
  var elements = document.querySelectorAll(modalQuerySelector || ".modal");
  [].forEach.call(elements, function appendElement(element) {
      document.body.appendChild(element);
    }
  );
}