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
    }, {
      name: 'Postcard',
      type: 'Large',
      height: 6,
      width: 8,
      image: 'postcard_large.png',
      backgroundColor: '#f15f22',
      backgroundColorHover: '#666',
    }, {
      name: 'Square Card',
      type: 'Small',
      height: 4,
      width: 4,
      image: 'square-card_small.png',
      backgroundColor: '#ed3824',
      backgroundColorHover: '#666',
    }, {
      name: 'Square Card',
      type: 'Medium',
      height: 5,
      width: 5,
      image: 'square-card_medium.png',
      backgroundColor: '#e22c25',
      backgroundColorHover: '#666',
    }, {
      name: 'Square Card',
      type: 'Large',
      height: 6,
      width: 6,
      image: 'square-card_large.png',
      backgroundColor: '#d22a28',
      backgroundColorHover: '#666',
    }, {
      name: 'Greeting Card',
      type: 'Small',
      height: 4,
      width: 6,
      image: 'greeting-card_small.png',
      backgroundColor: '#d71562',
      backgroundColorHover: '#666',
    }, {
      name: 'Greeting Card',
      type: 'Large',
      height: 5,
      width: 7,
      image: 'greeting-card_large.png',
      backgroundColor: '#c50059',
      backgroundColorHover: '#666',
    }, {
      name: 'Custom Envelope',
      type: 'A5',
      height: 5,
      width: 5,
      image: 'envelope_a5.png',
      backgroundColor: '#853992',
      backgroundColorHover: '#666',
      isEnvelope: true
    }, {
      name: 'Custom Envelope',
      type: 'A6',
      height: 4,
      width: 6,
      image: 'envelope_a6.png',
      backgroundColor: '#7322a2',
      backgroundColorHover: '#666',
      isEnvelope: true
    }, {
      name: 'Custom Envelope',
      type: 'A7',
      height: 4,
      width: 7,
      image: 'envelope_a7.png',
      backgroundColor: '#6a1b9a',
      backgroundColorHover: '#666',
      isEnvelope: true
    }, {
      name: 'Brochure',
      type: 'Flat',
      height: 8.5,
      width: 11,
      image: 'brochure_flat.png',
      backgroundColor: '#354fa3',
      backgroundColorHover: '#666',
    }, {
      name: 'Brochure',
      type: 'Trifold',
      height: 8.5,
      width: 11,
      image: 'brochure_trifold.png',
      backgroundColor: '#313dac',
      backgroundColorHover: '#666',
    }, {
      name: 'Brochure',
      type: 'Z-fold',
      height: 8.5,
      width: 11,
      image: 'brochure_z-fold.png',
      backgroundColor: '#283693',
      backgroundColorHover: '#666',
    }];

    return factory;
}

})(window, window.angular);
