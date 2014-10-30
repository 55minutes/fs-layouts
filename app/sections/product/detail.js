(function(window, angular, $) {

'use strict';

angular.module('productDetail', ['reflow'])
.controller('ProductDetailController', ProductDetailController);

function ProductDetailController($location, $scope, $timeout, reflow) {
  var bgColor = '#7321a2';

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
      reflow.productDetail.reflow($('#main-content').width(), bgColor);
    });
  });

  reflow.productDetail.register(bgColor);
}

})(window, window.angular, window.jQuery);
