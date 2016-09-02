// TODO: rename this to, simply, closest
module.exports = function getClosestParent(el, selector) {
    
	// run polyfill matches
    require('../polyfills/matches')();

    while (el) {
        if (el.matches(selector)) return el;
        el = el.parentNode;
    }
}
