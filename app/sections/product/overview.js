(function(window, angular, $) {

'use strict';

angular.module('productOverview', ['reflow'])
.controller('ProductOverviewController', ProductOverviewController);

function ProductOverviewController($scope, reflow) {
  reflow.register();
  reflow.reflow($('#main-content').width());
}

})(window, window.angular, window.jQuery);
