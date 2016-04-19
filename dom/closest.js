module.exports = function getClosestParentWithClass(el, className) {
    while (el) {
        if (el.classList.contains(className)) return el;
        el = el.parentNode;
    }
}
