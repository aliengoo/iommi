(function () {
  'use strict';

  angular.module('app').directive('formatMoney', formatMoney);

  formatMoney.$inject = ['accountingService'];

  function formatMoney(accountingService) {
    var exports = {
      restrict: 'A',
      require: 'ngModel',
      priority : 0,
      link: link
    };

    return exports;

    function link($s, $e, $a, ngModel) {

      function formatMoney(modelValue) {
        if (modelValue) {
          return accountingService.formatMoney(modelValue, "£", ".", ",");
        }

        return modelValue;
      }

      if (ngModel) {
        $e.on('blur', function () {
          $s.$evalAsync(function () {
            ngModel.$viewValue = formatMoney(ngModel.$modelValue);
            ngModel.$render();
          });
        });

        $e.on('focus', function () {
          $s.$evalAsync(function () {
            ngModel.$viewValue = ngModel.$modelValue;
            ngModel.$render();
          });
        });
      }
    }
  }

}());

