(function () {
  'use strict';

  angular.module('app').directive('validateDate', validateDate);

  validateDate.$inject = ['$log'];

  function validateDate($log) {
    var exports = {
      restrict: 'A',
      require: 'ngModel',
      link : link,
      scope :{
        options : '=validateDate'
      }
    };

    return exports;


    function link($s, $e, $a, ngModel) {

      $s.$watch('options', function (newVal) {
        var options = newVal;

        if (!options) {
          return;
        }

        if (!options.format) {
          $log.error('validate-date options must include a format property');
        } else {

          ngModel.$validators.range = function (modelValue) {
            var modelDate = moment(modelValue, options.format);

            if (modelDate.isValid()) {
              var maxDate = moment(options.max, options.format);
              var minDate = moment(options.min, options.format);

              if (modelDate.isBefore(minDate) || modelDate.isAfter(maxDate)){
                return false;
              }

              return true;
            } else {
              return false;
            }
          };
        }
      });

    }
  }
}());