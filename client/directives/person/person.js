(function () {
  'use strict';

  angular.module('app').directive('person', person);

  function person() {
    var exports = {
      restrict: 'E',
      require : '^form',
      templateUrl: 'person/person.html',
      transclude: false,
      scope: {
        person : '='
      },
      link: link
    };

    return exports;

    function link($s, $e, $a, form) {
      $s.form = form;
      var format = 'DDMMYYYY';
      $s.validateDateOptions = {
        format : format,
        max : moment().add(-18, "y").format(format),
        min : moment().add(-100, "y").format(format)
      };
    }
  }

}());
