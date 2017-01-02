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
            imageContainerSelector,
            // range is the minimum and maximum width that window must have in order to scale images
            // usually, this is undesired for mobile devices 
            range = {
                min: undefined, // it will only scale from 768px onwards, the "small" standard for bootstrap 3
                max: undefined 
            }

        // options
        if (typeof optionsOrSelector === 'object') {
            imageSelector = optionsOrSelector.imageSelector || 'img';
            // for now, the containers will be the direct parents
            imageContainerSelector = optionsOrSelector.imageContainerSelector;
            
            // check if there is min range here
            if (optionsOrSelector.range && optionsOrSelector.range.hasOwnProperty('min')) {
                range.min = optionsOrSelector.range.min;
            }
            // same for max range
            if (optionsOrSelector.range && optionsOrSelector.range.hasOwnProperty('max')) {
                range.max = optionsOrSelector.range.max;
            }
        } else {
            // then the first parameter is an image selector... no other options available here
            imageSelector = optionsOrSelector || 'img';
            imageContainerSelector = undefined;
        }

        var getClosestParent = require('../dom/closest-with-selector');

        function scaleImage(imageNode, imageContainer) {

            if (!imageNode.naturalWidth) {
              throw new Error('We do not believe this to be an image');
            }

            var
                imageWidth = imageNode.naturalWidth,
              // same logic as before
                imageHeight = imageNode.naturalHeight,
                containerWidth = imageContainer.offsetWidth,
                containerHeight = imageContainer.offsetHeight,
                heightDiff = containerHeight / imageHeight,
                widthDiff = containerWidth / imageWidth;


            var
            // let us suppose that it is the width that will be set to 100%
                attributeToBeChanged = 'width',
                otherAttribute = 'height';

            // only change this ratio if there difference between the heights is larger than the one with the widths
            if (heightDiff > widthDiff) {
                // then the height must be set to 100%
                attributeToBeChanged = 'height';
                otherAttribute = 'width';
            }

            imageNode.style[attributeToBeChanged] = '100%';
            imageNode.style[otherAttribute] = 'auto';
        }

        return {
            checkIfScalable: function() {
                var getWidth = require('../dom/get-width');
                var bodyWidth = getWidth(document.body);

                if (range.min && bodyWidth < range.min){
                    return false;
                }
                else if (range.max && bodyWidth > range.max) {
                    return false;
                }

                // else
                return true; 
            },
            scaleImages: function() {
              // first of all, check if it is scalable
              if (!this.checkIfScalable()) {
                return;
              }

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
