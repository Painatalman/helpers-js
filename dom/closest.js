// TODO: rename this to closest with class
module.exports = function getClosestParentWithClass(el, className) {
    while (el) {
        if (el.classList.contains(className)) return el;
        el = el.parentNode;
    }
}
