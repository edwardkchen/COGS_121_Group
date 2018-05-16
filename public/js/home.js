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
