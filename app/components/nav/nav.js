(function(window, angular, $) {

'use strict';

angular.module('topNavBar', [])
.controller('TopNavController', TopNavController);

function TopNavController($scope) {
  var cart = $('#cart');

  $scope.showCart = false;

  $scope.toggleCart = function() {
    $scope.showCart = !$scope.showCart;

    if ($scope.showCart) {
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
