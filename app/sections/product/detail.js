(function(window, angular, $) {

'use strict';

angular.module('productDetail', ['reflow'])
.controller('ProductDetailController', ProductDetailController);

function initialReflow(reflow) {
  var target = document.querySelector('main');

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      reflow.productDetail.reflow($('#main-content').width());
    });
  });

  var config = {childList: true, subtree: true};

  observer.observe(target, config);
}

function ProductDetailController($location, $scope, reflow) {
  $scope.$location = $location;

  $scope.pulseCart = function() {
    $('#cart-toggle').addClass('animated pulse');
    $('#cart-toggle').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('#cart-toggle').removeClass('animated pulse');
    });
  };

  reflow.productDetail.register();
  initialReflow(reflow);
  reflow.productDetail.reflow($('#main-content').width());
}

})(window, window.angular, window.jQuery);
