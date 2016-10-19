// based on 

/**
 * Get width of a dom element
 *
 * @param      {DOMNode}  element  The element
 * @param      {boolean}  [withMargin=undefined]  Whether the width will include margin or not. False by default
 * @link 	   http://youmightnotneedjquery.com/
 */
module.exports = function getWidth(element, withMargin) {
	var naturalWidth = element.offsetWidth; // simple width, no margin yet

	if (!withMargin) {
		return naturalWidth;
	}
	else {
		var style = element.currentStyle || getComputedStyle(element);

		return naturalWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
	}
}
