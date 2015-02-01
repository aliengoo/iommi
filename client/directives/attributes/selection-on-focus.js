(function () {
  'use strict';

  angular.module('app').directive('selectionOnFocus', selectionOnFocus);

  function selectionOnFocus() {
    var exports = {
      restrict: 'A',
      priority : 1,
      link: link
    };

    return exports;

    function link($s, $e, $a) {
      $e.on('focus', function () {

        $s.$evalAsync(function () {
          $($e).select();
        });
      });
    }
  }

}());


