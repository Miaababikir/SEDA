$(document).ready(function() {

      // Nice Scroll
      $("html").niceScroll();

    $(function() {

      'use strict';

      $(window).on("scroll", function() {
        window.console.log($(".navbar").height());
        window.console.log($(window).scrollTop());

        var navbar = $(".navbar");
        if ($(window).scrollTop() >= navbar.height()) {
          if (!$('#nav').hasClass('scrolled')) {
            navbar.addClass('scrolled');
          }
        } else {
          navbar.removeClass('scrolled');
        }

      });

    });

});

// Loading Screen
$( window ).on('load', function()
{
  $(".loading-overlay .sk-folding-cube").delay(4000).fadeOut(1000, function()
  {
    $('body').css('overflow', 'auto');
    $(this).parent().fadeOut(1000,function()
    {
      $(this).remove();
    });
  });
});

$('#type').typeIt({
     strings: 'This is a simple string.',
     speed: 50,
     autoStart: false
});

$('#type1').typeIt({
     strings: 'This is a simple string.',
     speed: 50,
     autoStart: false
});

$('#weAreTheBest').typeIt({
     strings: 'of our graduates got jobs related to the degree they received at our university.',
     speed: 100,
     startDelay: 1000,
     autoStart: false
});
