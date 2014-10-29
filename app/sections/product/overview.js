(function(window, angular, $) {

'use strict';

angular.module('productOverview', ['fixtures', 'reflow'])
.controller('ProductOverviewController', ProductOverviewController);

function initialReflow(reflow) {
  var target = document.querySelector('main');

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      reflow.reflow($('#main-content').width());
    });
  });

  var config = {childList: true, subtree: true};

  observer.observe(target, config);
}

function ProductOverviewController($scope, fixtures, reflow) {
  $scope.tileHover = function(e, color) {
    $(e.target).css('background-color', color);
  };

  $scope.stop = function(e) {
    e.stopPropagation();
  }

  $scope.products = fixtures.products;

  reflow.register();
  initialReflow(reflow);
}

})(window, window.angular, window.jQuery);
