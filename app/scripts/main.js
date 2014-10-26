(function (window, angular) {

'use strict';

angular.module('orderApp', ['ngRoute'])
.config(configRoute);

function configRoute($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'sections/product/overview.html'
  });
}

})(window, window.angular);
