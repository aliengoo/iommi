(function () {
  'use strict';

  angular.module('app').directive('selectGroup', selectGroup);

  selectGroup.$inject = ['$templateCache', '_'];

  function selectGroup($templateCache, _) {
    var exports = {
      restrict: 'E',
      require : '^form',
      transclude : true,
      template: template,
      link: link,
      scope: {
        options : '=',
        value : '='
      }
    };

    return exports;

    function template($e, $a) {
      var t = $templateCache.get('select-group/select-group.html');

      var data = {
        label : $a.label,
        name : $a.name
      };

      return _.template(t)(data);
    }

    function link($s, $e, $a, form, transcludeFn) {
      transcludeFn($s, function(clone) {
        $e.append(clone.find('p').text());

      });
    }
  }

}());
