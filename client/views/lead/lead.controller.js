(function () {
  'use strict';

  angular.module('app').controller('Lead', Lead);

  Lead.$inject = ['lead', 'leadService'];

  function Lead(lead, leadService) {
    var vm = this;
    vm.lead = lead;

    vm.title = lead.id ? 'Lead' : 'New Lead';

    vm.submit = function() {
      leadService.save(vm.lead, function (lead) {
        vm.lead = lead;
      });
    };
  }
}());
