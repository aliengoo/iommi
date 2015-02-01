(function () {
  'use strict';

  angular.module('app').directive('navBar', navBar);

  function navBar() {
    var exports = {
      restrict: 'E',
      templateUrl: 'nav-bar/nav-bar.html',
      transclude: false,
      scope: false,
      link: link
    };

    return exports;

    function link($s, $e, $a) {

    }
  }



}());
