/*globals angular:false, window:false, email:false */
angular.module('teamed', []).controller(
  'Main',
  [
    '$scope',
    function($scope) {
      'use strict';
      $scope.submit = function(form) {
        email(form);
        var text =
          'I would like to hire you\n\n'
          + $scope.info + '\n\n'
          + $scope.contact,
        url = 'http://www.netbout.com/start?post='
          + encodeURIComponent(text)
          + '&invite=bobby&invite=yegor256&rename='
          + encodeURIComponent('new estimate')
          + '&post=' + encodeURIComponent('@bobby estimate');
        window.location = url;
      };
    }
  ]
);
