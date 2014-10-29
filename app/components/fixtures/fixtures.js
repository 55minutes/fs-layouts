(function(window, angular) {

'use strict';

angular.module('fixtures', [])
.factory('fixtures', fixtures);

function fixtures() {
    var factory = {};

    factory.products = [{
      name: 'Business Card',
      type: 'Slim',
      height: 1.75,
      width: 3.5,
      image: 'business-card_slim.png',
      backgroundColor: '#f5ca26',
      backgroundColorHover: '#DCB522'
    }];

    return factory;
}

})(window, window.angular);
