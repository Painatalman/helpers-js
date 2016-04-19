/**
 * Bootstrap Modals should be on a top-level position in order to render properly. This function moves all "modals" with a default "modal" class to the bottom of the document body. However, it accepts other querySelectors.
 * @param  {String} modalQuerySelector "A query selector for modals"
 * @param {String} modalQuerySelectorException "an optional selector to exclude from the search. Basically, you may just omit this and add :not(query) to your first parameter."
 */
module.exports = function moveModalsToBodyEnd(modalQuerySelector, modalQuerySelectorException) {
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