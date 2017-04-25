/**
 * loads a library remotely into the bottom of the document's head
 * @param {string} url the url for the library
 */
module.exports = function loadLibrary(url) {
    var script = document.createElement('script');
    
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
