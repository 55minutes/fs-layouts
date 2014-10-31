(function (window, angular, $) {

'use strict';

angular.module('orderApp', [
  'ngAnimate', 'ngRoute',

  'snap',

  'productDetail',
  'productOverview',
])
.config(configRoute)
.config(configSnap)
.controller('AppController', AppController);

function configRoute($routeProvider) {
  $routeProvider.when('/', {
    redirectTo: '/products'
  });

  $routeProvider.when('/products', {
    controller: 'ProductOverviewController',
    templateUrl: 'sections/product/overview.html'
  });

  $routeProvider.when('/product-detail', {
    controller: 'ProductDetailController',
    templateUrl: 'sections/product/detail.html'
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

function AppController($scope) {
  var cart = $('#cart');

  $scope.showCart = false;

  $scope.toggleCart = function() {
    $scope.showCart = !$scope.showCart;

    if ($scope.showCart) {
      cart.animate({
        minWidth: '+=320'
      }, 300);
    } else {
      cart.animate({
        minWidth: '-=320'
      }, 300);
    }
  };
}

})(window, window.angular, window.jQuery);
