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
      backgroundColorHover: '#dcb522',
    }, {
      name: 'Business Card',
      type: 'Classic',
      height: 2,
      width: 3.5,
      image: 'business-card_classic.png',
      backgroundColor: '#ffbe1d',
      backgroundColorHover: '#e5aa1a',
    }, {
      name: 'Business Card',
      type: 'Rounded',
      height: 2,
      width: 3.5,
      image: 'business-card_rounded.png',
      backgroundColor: '#ffb111',
      backgroundColorHover: '#e59f0f',
    }, {
      name: 'Postcard',
      type: 'Classic',
      height: 4,
      width: 6,
      image: 'postcard_classic.png',
      backgroundColor: '#fd7e00',
      backgroundColorHover: '#e37100',
    }, {
      name: 'Postcard',
      type: 'Medium',
      height: 5,
      width: 7,
      image: 'postcard_medium.png',
      backgroundColor: '#ef6a21',
      backgroundColorHover: '#d65f1d',
    }];

    return factory;
}

})(window, window.angular);
