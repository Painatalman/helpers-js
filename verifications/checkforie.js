/**
 * Check if current browser is Internet Explorer via User Agent checking.
 * @link http://www.catswhocode.com/blog/10-jquery-snippets-for-efficient-web-development
 * @todo TEST
 * @return {Boolean} True if it is a version of IE, according to User Agent. False otherwise
 */
function isInternetExplorer() {
  return (navigator.userAgent.match(/msie/i))
}
