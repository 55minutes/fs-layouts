(function(window, angular, $) {

'use strict';

angular.module('productOverview', ['fixtures', 'reflow', 'tile'])
.controller('ProductOverviewController', ProductOverviewController);

function ProductOverviewController(
  $location, $scope, $timeout, fixtures, reflow
) {
  $scope.$location = $location;
  $scope.products = fixtures.products;

  $scope.$on('$viewContentLoaded', function(){
    $timeout(function() {
      reflow.products.reflow($('#main-content').width());
    });
  });

  reflow.products.register();
}

})(window, window.angular, window.jQuery);
