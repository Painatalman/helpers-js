(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.matchesPolyfill = factory();
    }
}(this, function () {

    /**
     * Default override for the Element.prototype.matches polyfill.
     * According to the official description, 'For browsers that do not support Element.matches() or Element.matchesSelector(), but carry support for document.querySelectorAll(), a polyfill exists'
     *
     * @link https://developer.mozilla.org/en/docs/Web/API/Element/matches
     */
    function matchesPolyfill() {
        if (!Element.prototype.matches) {
            Element.prototype.matches = 
                Element.prototype.matchesSelector || 
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector || 
                Element.prototype.oMatchesSelector || 
                Element.prototype.webkitMatchesSelector ||
                function(s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) {}
                    return i > -1;            
                };
        }
    }

    return matchesPolyfill;
    }
));
