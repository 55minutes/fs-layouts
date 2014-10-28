(function(window, angular, $) {

'use strict';

angular.module('mainContent', [])
.controller('MainContentController', MainContentController);

function reflow(width) {
  var basis = 100 / Math.floor(width / 320);
  $('.flex-item').css('flex', '0 0 ' + basis + '%');
  $('.flex-item-double').css('flex', '0 0 ' + basis * 2 + '%');
}

function MainContentController($scope) {
  var cart = $('#cart');
  var content = $('#main-content');

  $(window).bind('resize', function() {
    reflow(content.width());
  });

  cart.watch({
    properties: 'width',
    callback: function(data, i) {
      reflow(content.width());
    }
  });

  reflow(content.width());
}

})(window, window.angular, window.jQuery);
