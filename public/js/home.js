/* Implementation Notes
  Makes an ajax call to our backend to load an image of the user's current pet
*/
/*jshint esversion: 6*/
$(document).ready(() => {
  $.ajax({
    url: '/users/John',
    type: 'get',
    dataType: 'json',
    success: (data) => {
      $('#petImg').attr('src', data.img);
      $('#petName').text(data.pet);
    },
  });
});
