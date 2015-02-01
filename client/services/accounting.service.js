(function () {
  'use strict';

  angular.module('app').factory('accountingService', accountingService);

  accountingService.$inject = ['$window'];

  function accountingService($window) {
    return $window.accounting;
  }

}());
