(function () {
  'use strict';

  angular.module('app').directive('investment', investment);

  investment.$inject = ['sourceOfFunds'];

  function investment(sourceOfFunds) {
    var exports = {
      restrict: 'E',
      templateUrl: 'investment/investment.html',
      scope : {
        lead : '='
      },
      link: link
    };

    return exports;

    function link($s, $e, $a) {
      $s.sourceOfFunds = sourceOfFunds;
    }
  }

}());
