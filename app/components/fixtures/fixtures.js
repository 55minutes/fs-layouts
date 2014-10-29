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
      backgroundColorHover: '#666',
    }, {
      name: 'Business Card',
      type: 'Classic',
      height: 2,
      width: 3.5,
      image: 'business-card_classic.png',
      backgroundColor: '#ffbe1d',
      backgroundColorHover: '#666',
    }, {
      name: 'Business Card',
      type: 'Rounded',
      height: 2,
      width: 3.5,
      image: 'business-card_rounded.png',
      backgroundColor: '#ffb111',
      backgroundColorHover: '#666',
    }, {
      name: 'Postcard',
      type: 'Classic',
      height: 4,
      width: 6,
      image: 'postcard_classic.png',
      backgroundColor: '#fd7e00',
      backgroundColorHover: '#666',
    }, {
      name: 'Postcard',
      type: 'Medium',
      height: 5,
      width: 7,
      image: 'postcard_medium.png',
      backgroundColor: '#ef6a21',
      backgroundColorHover: '#666',
    }];

    return factory;
}

})(window, window.angular);
