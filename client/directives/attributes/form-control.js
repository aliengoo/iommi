(function () {
  'use strict';

  angular.module('app').directive('formControl', formControl);

  function formControl() {
    var exports = {
      restrict: 'A',
      link: link
    };

    return exports;

    function link($s, $e, $a) {
      $e.addClass('form-control');
    }
  }

  angular.module('app').directive('fc', fc);

  function fc() {
    var exports = {
      restrict: 'A',
      link: link
    };

    return exports;

    function link($s, $e, $a) {
      $e.addClass('form-control');
    }
  }

}());
