/*jshint esversion: 6*/
$(document).ready(() => {
  var URL;
  var ACCESS_TOKEN;
  var USER_ID;

  $('#get_profile_info').click(() => {
    URL = window.location.href;
    ACCESS_TOKEN = URL.split('#')[1].split('=')[1].split('&')[0];
    USER_ID = URL.split('#')[1].split('=')[2].split('&')[0];
    $.ajax({
      url: 'https://api.fitbit.com/1/user/' + USER_ID + '/profile.json',
      type: 'GET',
      headers: {
        Authorization: 'Bearer ' + ACCESS_TOKEN,
      },
      dataType: 'json',
      success: (data) => {
        console.log(data);
        $('#user_name').text(data.user.fullName);
        $('#user_age').text(data.user.age);
        $('#user_gender').text(data.user.gender);
        $('#user_height').text(data.user.height);
        $('#user_weight').text(data.user.weight);
      },
    });
  });

  $('#get_steps_data').click(() => {
    $.ajax({
      url: 'https://api.fitbit.com/1/user/-/activities/steps/date/today/1w.json',
      type: 'GET',
      headers: {
        Authorization: 'Bearer ' + ACCESS_TOKEN,
      },
      dataType: 'json',
      success: (data) => {
        console.log(data);
      },
    });
  });
});
