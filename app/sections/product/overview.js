(function(window, angular, $) {

'use strict';

angular.module('productOverview', ['fixtures', 'reflow', 'tile'])
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

function ProductOverviewController($location, $scope, fixtures, reflow) {
  $scope.$location = $location;
  $scope.products = fixtures.products;

  reflow.register();
  initialReflow(reflow);
}

})(window, window.angular, window.jQuery);
