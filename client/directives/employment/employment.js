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

      $s.options = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
        'Option 6'
      ];
    }
  }

}());
