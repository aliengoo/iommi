(function () {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {

    $stateProvider.state('lead', {
      url: '/lead/:id',
      templateUrl: 'lead/lead.html',
      controller: 'Lead as vm',
      resolve : {
        lead: ['$stateParams', 'leadService', function ($stateParams, leadService) {
          return leadService.get({
            id: $stateParams.id
          }).$promise;
        }]
      }
    }).state('new-lead', {
      url: '/lead',
      templateUrl: 'lead/lead.html',
      controller: 'Lead as vm',
      resolve: {
        lead : ['$q', function($q){
          return $q.when({
            person : {},
            address : {}
          });
        }]
      }
    }).state('leads', {
      url: '/leads',
      templateUrl: 'lead/leads.html',
      controller: 'Leads as vm'
    });

  }

}());
