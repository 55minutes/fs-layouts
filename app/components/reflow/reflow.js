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

  factory.productDetail.reflow = function(width) {
    if (width <= 940) {
      $('.detail-header-section').css('flex-wrap', 'wrap');
    } else {
      $('.detail-header-section').css('flex-wrap', 'nowrap');
    }

    if (width <= 660) {
      $('.price-grid').css('font-size', '.7rem');
    } else if (width <= 760) {
      $('.price-grid').css('font-size', '.8rem');
    } else if (width <= 860) {
      $('.price-grid').css('font-size', '.9rem');
    } else if (width <= 960) {
      $('.price-grid').css('font-size', '1rem');
    } else {
      $('.price-grid').css('font-size', '1.25rem');
    }
  };

  factory.productDetail.register = function() {
    $(window).bind('resize', function() {
      factory.productDetail.reflow(content.width());
    });

    cart.watch({
      properties: 'width',
      callback: function(data, i) {
        factory.productDetail.reflow(content.width());
      }
    });
  };

  return factory;
}

})(window, window.angular, window.jQuery);
