/* Implementation Notes
  Uses basic Javascript function to fill the hunger bar for our pet.
  Makes an ajax call to the users database to subtract points
*/
/*jshint esversion: 6*/

// lowest cost item, feeds the least amount
function feedPopsicle() {
  const points = Number($('#points').val());
  console.log(points);
  if (points >= 50 && parseInt($('#Hunger').val()) < 5000) {
    $.ajax({
      url: '/pet/feed',
      type: 'POST',
      dataType: 'json',
      data: {
        added_point: 50,
      },
      success: (data) => {
        console.log(data);
        $('#totalPoints').text("Total points: " + data.total_points);
        $('#Hunger').val(Number(data.hunger));
        $('#points').val(Number(data.total_points));
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
};

//2nd to lowest cost item, feeds more than the popsicle
function feedCupcake() {
  const points = Number($('#points').val());
  console.log(points);
  if (points >= 75 && parseInt($('#Hunger').val()) < 5000) {
    $.ajax({
      url: '/pet/feed',
      type: 'POST',
      dataType: 'json',
      data: {
        added_point: 75,
      },
      success: (data) => {
        console.log(data);
        $('#totalPoints').text("Total points: " + data.total_points);
        $('#Hunger').val(Number(data.hunger));
        $('#points').val(Number(data.total_points));
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
};

//3rd lowest cost item
function feedBurger() {
  const points = Number($('#points').val());
  console.log(points);
  if (points >= 100 && parseInt($('#Hunger').val()) < 5000) {
    $.ajax({
      url: '/pet/feed',
      type: 'POST',
      dataType: 'json',
      data: {
        added_point: 100,
      },
      success: (data) => {
        console.log(data);
        $('#totalPoints').text("Total points: " + data.total_points);
        $('#Hunger').val(Number(data.hunger));
        $('#points').val(Number(data.total_points));
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
};

//Middle cost item, feeds a bit more than the popsicle and burger
function feedChicken() {
  const points = Number($('#points').val());
  console.log(points);
  if (points >= 200 && parseInt($('#Hunger').val()) < 5000) {
    $.ajax({
      url: '/pet/feed',
      type: 'POST',
      dataType: 'json',
      data: {
        added_point: 200,
      },
      success: (data) => {
        console.log(data);
        $('#totalPoints').text("Total points: " + data.total_points);
        $('#Hunger').val(Number(data.hunger));
        $('#points').val(Number(data.total_points));
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
};

// 3rd highest cost item, feeds more than the previous four items.
function feedCorn() {
  const points = Number($('#points').val());
  console.log(points);
  if (points >= 300 && parseInt($('#Hunger').val()) < 5000) {
    $.ajax({
      url: '/pet/feed',
      type: 'POST',
      dataType: 'json',
      data: {
        added_point: 300,
      },
      success: (data) => {
        console.log(data);
        $('#totalPoints').text("Total points: " + data.total_points);
        $('#Hunger').val(Number(data.hunger));
        $('#points').val(Number(data.total_points));
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
};

// 2nd highest cost item
function feedGrapes() {
  const points = Number($('#points').val());
  console.log(points);
  if (points >= 400 && parseInt($('#Hunger').val()) < 5000) {
    $.ajax({
      url: '/pet/feed',
      type: 'POST',
      dataType: 'json',
      data: {
        added_point: 400,
      },
      success: (data) => {
        console.log(data);
        $('#totalPoints').text("Total points: " + data.total_points);
        $('#Hunger').val(Number(data.hunger));
        $('#points').val(Number(data.total_points));
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
};

// highest cost item, feeds the most
function feedMeat() {
  const points = Number($('#points').val());
  console.log(points);
  if (points >= 500 && parseInt($('#Hunger').val()) < 5000) {
    $.ajax({
      url: '/pet/feed',
      type: 'POST',
      dataType: 'json',
      data: {
        added_point: 500,
      },
      success: (data) => {
        console.log(data);
        $('#totalPoints').text("Total points: " + data.total_points);
        $('#Hunger').val(Number(data.hunger));
        $('#points').val(Number(data.total_points));
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
};
