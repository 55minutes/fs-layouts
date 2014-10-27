(function (window, angular) {

'use strict';

angular.module('orderApp', ['ngAnimate', 'ngRoute', 'snap'])
.config(configRoute)
.config(configSnap)
.controller('MainController', MainController);

function configRoute($routeProvider) {
  $routeProvider.when('/', {
    redirectTo: '/products'
  });

  $routeProvider.when('/products', {
    templateUrl: 'sections/product/overview.html'
  });

  $routeProvider.otherwise({
    redirectTo: '/products'
  });
}

function configSnap(snapRemoteProvider) {
  snapRemoteProvider.globalOptions = {
    disable: 'left',
    touchToDrag: false
  };
}

function MainController($scope) {
  $scope.data = {
    displaySidebar: false
  };
}

})(window, window.angular);
