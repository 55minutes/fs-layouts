(function(window, angular) {

'use strict';

angular.module('tile', [])
.controller('TileController', TileController);

function TileController($scope) {
  $scope.tileBackgroundColor = function(color) {
    $scope.backgroundColor = color;
  };
}

})(window, window.angular);
