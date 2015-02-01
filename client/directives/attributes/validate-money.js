(function () {
  'use strict';

  angular.module('app').directive('validateMoney', validateMoney);

  function validateMoney() {
    var exports = {
      restrict: 'A',
      require: 'ngModel',
      link: link
    };

    return exports;

    function link($s, $e, $a, ngModel) {

      $s.$evalAsync(function() {
        var options = $a.validateMoney;

        if (options) {
          ngModel.$validators.range = function (modelValue) {

            if (modelValue === '') {
              return true;
            }

            var money = parseFloat(modelValue);

            return !isNaN(money) &&
              modelValue >= parseFloat(options.min || 0) &&
              modelValue <= parseFloat(options.max || 1000000);
          };
        }
      });


    }
  }

}());
