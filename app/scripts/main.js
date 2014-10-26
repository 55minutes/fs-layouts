(function (window, angular) {

'use strict';

angular.module('orderApp', ['ngRoute'])
.config(configRoute)
.controller('MainController', MainController);

function configRoute($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'sections/product/overview.html'
  });
}

function MainController($scope) {
  $scope.data = {
    displaySidebar: true
  };
}

})(window, window.angular);
