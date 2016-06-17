/*globals $:false, window:false, document:false, alert:false */
var email = function(form) {
  'use strict';
  var $form = $(form),
    $button = $form.find('button'),
    before = $button.text(),
    data = {};
  $button.prop('disabled', true).text('processing...');
  $form.find('input,textarea').each(
    function() {
      var $i = $(this);
      data[$i.prop('name')] = $i.val();
    }
  );
  if (data.name !== undefined) {
    data._subject = data.name;
  }
  $.ajax(
    {
      type: 'POST',
      url: 'http://formspree.io/yegor@teamed.io',
      data: data,
      success: function () {
        $button.text('thanks!');
      },
      error: function () {
        $button.prop('disabled', false).text(before);
      }
    }
  );
};
angular.module('teamed', []).controller(
  'Main',
  [
    '$scope',
    function($scope) {
      'use strict';
      $scope.email = email;
    }
  ]
);

