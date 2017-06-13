jQuery(function($) {
    'use strict';

    // Mobile Navigation Trigger
    $("#mobile-nav-trigger").click(function() {
      $(".mobile-nav").animate({right: '0'});
    });

    $("#mobile-menu-close").click(function() {
      $(".mobile-nav").animate({right: '-300'});
    });

});



