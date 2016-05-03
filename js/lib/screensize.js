/// <reference path="../typings/jquery/jquery.d.ts" />
$(function () {
  function screenSize() {
    var screenWidth = $(window).innerWidth();
    var screenHeight = $(window).innerHeight();
    $('body').append('<div id="sizetext" style="position: fixed;top: 0;right: 0;background-color: #fff;font-weight: 700; z-index: 9999;"></div>');
    $('#sizetext').text('gen :' + screenWidth).append('<br>' + 'yuk :&nbsp;&nbsp;' + screenHeight);
  }
  screenSize();
  $(window).resize(function () {
    screenSize();
  });
});

