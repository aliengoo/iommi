(function () {
  'use strict';

  angular.module('app').directive('restrictKeys', restrictKeys);

  function restrictKeys() {
    var exports = {
      restrict: 'A',
      require : 'ngModel',
      priority : -1,
      link: link
    };

    return exports;

    function link($s, $e, $a, ngModel) {
      $s.$evalAsync(function() {
        $s.keys = $s.$eval($a.restrictKeys).keys;

        $e.on('keypress', function (ev) {
          if ($s.keys.indexOf(ev.keyCode) < 0){
            ev.preventDefault();
          }
        });
      });
    }
  }

}());
