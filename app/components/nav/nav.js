(function(window, angular, $) {

'use strict';

angular.module('topNavBar', [])
.controller('TopNavController', TopNavController);

function TopNavController($scope) {
  var showCart = false;
  var cart = $('#cart');

  $scope.toggleCart = function() {
    showCart = !showCart;

    if (showCart) {
      cart.animate({
        minWidth: '+=320'
      }, 300);
    } else {
      cart.animate({
        minWidth: '-=320'
      }, 300);
    }
  };
}

})(window, window.angular, window.jQuery);
