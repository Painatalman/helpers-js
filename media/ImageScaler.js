(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.ImageScaler = factory();
    }
}(this, function() {
    /**
     * Scales images based on their container. It decides which field, the width or height of an image, should be resized to 100% in order to ensure filling of the parent node
     * @pre Image container (parent, for now) should have overflow: hidden and a fixed height... or based on something else
     * @param {[type]} optionsOrSelector [description]
     */
    function ImageScaler(optionsOrSelector) {
        var images,
            imageSelector,
            imageContainerSelector

        // options
        if (typeof optionsOrSelector === 'object') {
            imageSelector = optionsOrSelector.imageSelector || 'img';
            // for now, the containers will be the direct parents
            imageContainerSelector = optionsOrSelector.imageContainerSelector;
        } else {
            imageSelector = optionsOrSelector || 'img';
            imageContainerSelector = undefined;
        }

        // TODO: change this to 'closest' in the next version
        var getClosestParent = require('../dom/closest-with-selector');

        function scaleImage(imageNode, imageContainer) {

            var
                imageWidth = imageNode.naturalWidth,
                imageHeight = imageNode.naturalHeight,
                containerWidth = imageContainer.offsetWidth,
                containerHeight = imageContainer.offsetHeight,
                heightDiff = containerHeight / imageHeight,
                widthDiff = containerWidth / imageWidth;

            var
            // let us suppose that it is the width that will be set to 100%
                attributeToBeChanged = 'width',
                otherAttribute = 'height';

            if ((containerHeight > imageHeight && containerWidth > imageWidth) || (containerHeight < imageHeight && containerWidth < imageWidth)) {
                if (heightDiff > widthDiff) {
                    // then the height must be set to 100%
                    attributeToBeChanged = 'height';
                    otherAttribute = 'width';
                }
            } else {
                // either the height of the image is larger than the container the width smaller, or vice versa. An image with smaller height must, then, be scaled accordingly
                if (containerHeight > imageHeight) {
                    attributeToBeChanged = 'height';
                    otherAttribute = 'width';
                }
            }



            imageNode.style[attributeToBeChanged] = '100%';
            imageNode.style[otherAttribute] = 'auto';
        }

        return {
            scaleImages: function() {
                for (var i = 0; i < images.length; i++) {
                    var image = images[i],
                        imageContainer;

                    if (imageContainerSelector) {
                        imageContainer = getClosestParent(image, imageContainerSelector) || image.parentNode;
                    }
                    else {
                        imageContainer = image.parentNode;
                    }

                    scaleImage(image, imageContainer);
                }
            },
            init: function() {
                images = document.querySelectorAll(imageSelector);

                this.scaleImages();

                window.addEventListener('resize', this.scaleImages.bind(this));

            }
        }
    }

    return ImageScaler;
}));
