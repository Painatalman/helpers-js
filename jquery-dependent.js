/**
 * ## Sources
 * + https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know?utm_source=javascriptweekly&utm_medium=email#back-to-top-button
 *
 */


/**
 * bind a scroll-to-top animation to an element, on click
 * @param  {string} selector a selector that will be selected via jQuery
 * @param  {integer} interval a time interval in ms, it is 800 by default
 * 
 */
function bindScrollToTop(selector, interval) {
  $(selector).click(function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, interval || 800);
  });
}

$.preloadImages = function () {
  for (var i = 0; i < arguments.length; i++) {
    $('<img>').attr('src', arguments[i]);
  }
};

$.preloadImages('img/hover-on.png', 'img/hover-off.png');

// bind something to image loading


// Fix Broken Images Automatically
$('img').on('error', function () {
  if(!$(this).hasClass('broken-image')) {
    $(this).prop('src', 'img/broken.png').addClass('broken-image');
  }
});

//Disabling Input Fields
$('input[type="submit"]').prop('disabled', true);

// Stop the Loading of Links
$('a.no-link').click(function (e) {
  e.preventDefault();
});

// Fade
$('.btn').click(function () {
  $('.element').fadeToggle('slow');
});

// Toggle
$('.btn').click(function () {
  $('.element').slideToggle('slow');
});

// Simple Accordion
// Close all panels
$('#accordion').find('.content').hide();

// Accordion
$('#accordion').find('.accordion-header').click(function () {
  var next = $(this).next();
  next.slideToggle('fast');
  $('.content').not(next).slideUp('fast');
  return false;
});

// various divs the same height
var $columns = $('.column');
var height = 0;
$columns.each(function () {
  if ($(this).height() > height) {
    height = $(this).height();
  }
});
$columns.height(height);
// ALL OF THEM
var $rows = $('.same-height-columns');
$rows.each(function () {
  $(this).find('.column').height($(this).height());
});

// Open in new tab
$('a[href^="http"]').attr('target', '_blank');
$('a[href^="//"]').attr('target', '_blank');
$('a[href^="' + window.location.origin + '"]').attr('target', '_self');

// Search
var search = $('#search').val();
$('div:not(:contains("' + search + '"))').hide();

// on visibilitychange
$(document).on('visibilitychange', function (e) {
  if (e.target.visibilityState === 'visible') {
    console.log('Tab is now in view!');
  } else if (e.target.visibilityState === 'hidden') {
    console.log('Tab is now hidden!');
  }
});

// global ajax error handler
$(document).ajaxError(function (e, xhr, settings, error) {
  console.log(error);
});
