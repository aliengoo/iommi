(function () {
  'use strict';

  angular.module('app').factory('momentService', momentService);

  momentService.$inject = ['$window'];

  function momentService($window) {
    return $window.moment;
  }

}());
