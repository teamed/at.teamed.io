/*globals $:false, window:false, document:false, alert:false */
function send_email(text, success, error) {
  'use strict';
  $.ajax(
    {
      type: 'POST',
      url: 'http://formspree.io/yegor@teamed.io',
      data: {
        'message': 'Hi,\n\n' + text
          + '\n\nThanks'
          + '\n\n--\nsent through at.teamed.io',
        '_subject': 'new form submitted'
      },
      success: success,
      error: error
    }
  );
}
var email = function(form) {
  'use strict';
  var $form = $(form),
    $button = $form.find('button'),
    before = $button.text(),
    text = '';
  $button.prop('disabled', true).text('processing...');
  $form.find('input,textarea').each(
    function() {
      var $i = $(this);
      text += $i.prop('name') + ': ' + $i.val() + '\n\n';
    }
  );
  send_email(
    text,
    function () {
      $button.text('thanks!');
    },
    function () {
      $button.prop('disabled', false).text(before);
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
