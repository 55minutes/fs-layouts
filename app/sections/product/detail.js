(function(window, angular, $) {

'use strict';

angular.module('productDetail', ['reflow'])
.controller('ProductDetailController', ProductDetailController);

function ProductDetailController($location, $scope, $timeout, reflow) {
  $scope.$location = $location;

  $scope.pulseCart = function() {
    $('#cart-toggle').addClass('animated pulse');
    $('#cart-toggle').one(
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function() {
      $('#cart-toggle').removeClass('animated pulse');
    });
  };

  $scope.$on('$viewContentLoaded', function(){
    $timeout(function() {
      reflow.productDetail.reflow($('#main-content').width());
    }, 400);
  });

  reflow.productDetail.register();
}

})(window, window.angular, window.jQuery);
