(function () {
  'use strict';

  angular.module('app').directive('required', required);

  function required() {
    var exports = {
      restrict: 'A',
      link: link
    };

    return exports;

    function link($s, $e, $a) {
      $e.addClass('highlight');
    }
  }

}());
