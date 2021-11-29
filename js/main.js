// REGISTRATION FORM VALIDATION



$('#submit-form').click(function() {
  const $username = $('#username');
  const $firstName = $('#first-name');
  const $password = $('#password');
  const $retypePassword = $('#retype-password');
  const $country = $('#country');
 

  $username
    .removeClass('border')
    .removeClass('border-danger');
  $firstName
    .removeClass('border')
    .removeClass('border-danger');
  $password
    .removeClass('border')
    .removeClass('border-danger');
  $retypePassword
    .removeClass('border')
    .removeClass('border-danger');
  $country
    .removeClass('border')
    .removeClass('border-danger');



  if ($username.val() == '' ||$firstName.val() == '' || $password.val() == '' || $retypePassword.val() == '' || $country.val() == 'Country:') {
      $username
        .addClass('border')
        .addClass('border-danger');
      $password
        .addClass('border')
        .addClass('border-danger');
      $retypePassword
        .addClass('border')
        .addClass('border-danger');
      $firstName
        .addClass('border')
        .addClass('border-danger');
      $country
        .addClass('border')
        .addClass('border-danger');
      return false; 

    } else if($password.val() !== $retypePassword.val() || $password.length() < 8) {
      $password
        .addClass('border')
        .addClass('border-danger');
      $retypePassword
        .addClass('border')
        .addClass('border-danger');
alert('Password must contain at least 8 symbols')
      return false;
    } else {
     true
    }

  });


//CHAT
$('#send-message').click(function() {
  const $newMessageUser = $('#chat-username');
  const $newMessage = $('#chat-message');
  $newMessage
      .removeClass('border')
      .removeClass('border-danger');
  $newMessageUser
      .removeClass('border')
      .removeClass('border-danger');

  if ($newMessage.val() == '' || $newMessageUser.val() == '') {
      $newMessage
          .addClass('border')
          .addClass('border-danger');
      $newMessageUser
          .addClass('border')
          .addClass('border-danger');
      return false;
  }
  const newChatMessage = `<li class="list-group-item">
  <p><strong>${$newMessageUser.val()}</strong></p>
  <p>${$newMessage.val()}</p></li>`;
  $('#tasks-list').append(newChatMessage);
  $newMessageUser.val('');
  $newMessage.val('');
});