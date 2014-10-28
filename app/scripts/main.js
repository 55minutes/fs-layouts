(function (window, angular) {

'use strict';

angular.module('orderApp', [
  'ngAnimate', 'ngRoute',

  'snap',

  'mainContent',
  'topNavBar'
])
.config(configRoute)
.config(configSnap);

function configRoute($routeProvider) {
  $routeProvider.when('/', {
    redirectTo: '/products'
  });

  $routeProvider.when('/products', {
    controller: 'MainContentController',
    templateUrl: 'sections/product/overview.html'
  });

  $routeProvider.otherwise({
    redirectTo: '/products'
  });
}

function configSnap(snapRemoteProvider) {
  snapRemoteProvider.globalOptions = {
    disable: 'left',
    minPosition: -320,
    touchToDrag: false
  };
}

})(window, window.angular);
