(function () {
  'use strict';

  angular.module('app').directive('employment', employment);

  function employment() {
    var exports = {
      restrict: 'E',
      require : '^form',
      templateUrl: 'employment/employment.html',
      transclude: false,
      scope: {
        person : '='
      },
      link: link
    };

    return exports;

    function link($s, $e, $a, form) {
      $s.form = form;
    }
  }

}());
