(function () {
  'use strict';

  angular.module('app').directive('formGroup', formGroup);

  formGroup.$inject = ['$templateCache'];

  function formGroup($templateCache) {
    var exports = {
      restrict: 'E',
      template: template,
      require : '^form',
      transclude: true,
      scope: true,
      link: link
    };

    return exports;

    function template($e, $a) {
      var t = $templateCache.get('form-group/form-group.html');

      var labelElement = '';

      if ($a.label) {
        labelElement = '<label class="control-label">' + $a.label + '</label>';
      }

      return _.template(t)({
        labelElement: labelElement
      });
    }

    function link($s, $e, $a) {
      var input = $e.find('[ng-model]');

      input.addClass('form-control');

      $s.ngModel = angular.element(input).controller('ngModel');
    }
  }

}());
