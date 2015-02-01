(function () {
  'use strict';

  angular.module('app').factory('leadService', leadService);

  leadService.$inject = ['$resource'];

  function leadService($resource) {
    return $resource('lead/:id', {
      id: '@id'
    }, {});
  }
}());
