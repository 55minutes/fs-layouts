(function(window, angular, $) {

'use strict';

angular.module('reflow', [])
.factory('reflow', reflow);

function reflow() {
  var factory = {};

  var cart = $('#cart');
  var content = $('#main-content');

  factory.products = {};

  factory.products.reflow = function(width) {
    var basis = 100 / Math.floor(width / 320);
    $('.tile').css('flex', '0 0 ' + basis + '%');
    $('.tile-2x').css('flex', '0 0 ' + basis * 2 + '%');
    $('.snap-content').css('background-color', 'white');
  };

  factory.products.register = function() {
    $(window).bind('resize', function() {
      factory.products.reflow(content.width());
    });

    cart.watch({
      properties: 'width',
      callback: function(data, i) {
        factory.products.reflow(content.width());
      }
    });
  };

  factory.productDetail = {};

  factory.productDetail.reflow = function(width, bgColor) {
    $('.snap-content').css('background-color', bgColor);

    // Reflow the header section
    if (width <= 940) {
      $('.detail-header-section').css('flex-wrap', 'wrap');
    } else {
      $('.detail-header-section').css('flex-wrap', 'nowrap');
    }

    // Calculate cell width on the fly, subtracting the padding for the inner
    // wrapper, giving each cell 13%
    $('tbody td').css('width', (width - 56 * 2) * 0.13);

    if (width <= 690) {
      $('.price-grid').css('font-size', '.9rem');
    } else if (width <= 785) {
      $('.price-grid').css('font-size', '1rem');
    } else if (width <= 890) {
      $('.price-grid').css('font-size', '1.25rem');
    } else {
      $('.price-grid').css('font-size', '1.5rem');
    }
  };

  factory.productDetail.register = function(bgColor) {
    $(window).bind('resize', function() {
      factory.productDetail.reflow(content.width(), bgColor);
    });

    cart.watch({
      properties: 'width',
      callback: function(data, i) {
        factory.productDetail.reflow(content.width(), bgColor);
      }
    });
  };

  return factory;
}

})(window, window.angular, window.jQuery);
