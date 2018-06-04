/* Implementation Notes
  This javascript file makes ajax calls to the Fitbit API to retrieve user
  information. It uses the C3 Javascript library to produce line graphs that
  to show the user's progress for the week.
*/
/*jshint esversion: 6*/
$(document).ready(() => {
  var URL;
  var ACCESS_TOKEN;
  var USER_ID;

  // Checks if the user ACCESS_TOKEN is in the URL, if not, it will redirect
  // to the Fitbit API.
  if (!window.location.hash) {
    //var r = confirm('Connect to Fitbit.com?\n' +
    //  'Click OK to continue\nCancel to go back to home page.');
    if (true) {
      window.location.replace('/connect');
    } else {
      window.location.replace('/home');
    }
  } else {
    // Parse the URL
    URL = window.location.href;
    ACCESS_TOKEN = URL.split('#')[1].split('=')[1].split('&')[0];
    USER_ID = URL.split('#')[1].split('=')[2].split('&')[0];

    // Get User Profile information from the Fitbit API
    $.ajax({
      url: 'https://api.fitbit.com/1/user/' + USER_ID + '/profile.json',
      type: 'GET',
      headers: {
        Authorization: 'Bearer ' + ACCESS_TOKEN,
      },
      dataType: 'json',
      success: (data) => {
        $('#user_name').text('Hi, ' + data.user.firstName + '!');
        $('#user_desc').text('Here\'s your Fitbit data from the past week.');
      },
    });

    // Generate line chart for steps for the past week
    var chart1 = c3.generate({
      bindto: '#chart1',
      padding: {
        right: 30,
      },
      data: {
        x: 'dates',
        columns: [
          ['dates'],
          ['steps'],
        ],
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%m/%d',
          },
        },
      },
      legend: {
        show: false,
      },
    });

    // Get user step information from the Fitbit API
    $.ajax({
      url: 'https://api.fitbit.com/1/user/-/activities/steps/date/today/1w.json',
      type: 'GET',
      headers: {
        Authorization: 'Bearer ' + ACCESS_TOKEN,
      },
      dataType: 'json',
      success: (data) => {
        var steps = ['steps'];
        var dates = ['dates'];
        data['activities-steps'].forEach((e) => {
          steps.push(parseInt(e.value));
          dates.push(e.dateTime);
        });
        chart1.load({
          columns: [
            dates,
            steps,
          ],
        });
      },
    });

    // Generate line chart for calories for the past week
    var chart2 = c3.generate({
      bindto: '#chart2',
      padding: {
        right: 30,
      },
      data: {
        x: 'dates',
        columns: [
          ['dates'],
          ['calories'],
        ],
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%m/%d',
          },
        },
      },
      legend: {
        show: false,
      },
    });

    // Get user calories burned information from the Fitbit API
    $.ajax({
      url: 'https://api.fitbit.com/1/user/-/activities/calories/date/today/1w.json',
      type: 'GET',
      headers: {
        Authorization: 'Bearer ' + ACCESS_TOKEN,
      },
      dataType: 'json',
      success: (data) => {
        var calories = ['calories'];
        var dates = ['dates'];
        data['activities-calories'].forEach((e) => {
          calories.push(parseInt(e.value));
          dates.push(e.dateTime);
        });
        chart2.load({
          columns: [
            dates,
            calories,
          ],
        });
      },
    });
  }
});
