$(document).ready(function(){
  $('select').formSelect();
});

$(document).ready(function(){
  $('.datepicker').datepicker();
});


$('#walk').on('click', () => {
  console.log('clicked');
});

$('#add-goal').on('click', () => {
  console.log('clicked add');
  $('#goals-form').css("display","block");
});

document.getElementById("goal").onchange=function() {
  console.log(this.value);
  if(this.value == "walk") {
    $('#secondInput').html("");
    $('#secondInput').append('<input type="text" name="goal[amount]" placeholder="How many steps?">');
    $('#secondInput').append('<input type="text" class="datepicker" name="goal[date]" placeholder="Select a date">');
    $('#secondInput').append('<input type="hidden" name="goal[type]" value="walk">');
    $('#secondInput').append('<button class="waves-effect waves-light btn">Submit</button>');
    $('.datepicker').datepicker();

  }
  if(this.value == "burn") {
    $('#secondInput').html("");
    $('#secondInput').append('<input type="text" name="goal[amount]" placeholder="How many calories?">');
    $('#secondInput').append('<input type="text" class="datepicker" name="goal[date]" placeholder="Select a date">');
        $('#secondInput').append('<input type="hidden" name="goal[type]" value="burn">');
    $('#secondInput').append('<button class="waves-effect waves-light btn">Submit</button>');
    $('.datepicker').datepicker();
  }
}
