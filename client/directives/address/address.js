(function () {
  'use strict';

  angular.module('app').directive('address', address);

  function address() {
    var exports = {
      restrict: 'E',
      templateUrl: 'address/address.html',
      transclude: false,
      scope: {
        address : '='
      },
      link: link
    };

    return exports;

    function link($s, $e, $a) {

    }
  }

}());
