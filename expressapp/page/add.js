

var repeatCount = 70; //
var date_repeat = "24.12.2021";
var ratio_repeat = "95%";
var learningWords = 750;
var date_learning = "21.12.2021"
var ratio_learning = "78%";
var light_field = "#86E9B5";

//init

$(document).ready(function () {
  /*effect for the buttons*/
  $(".menu__bg, #ok_btn").hover(
    function () {
      $(this).stop().animate({ opacity: 1 }, 200);
    },
    function () {
      $(this).stop().animate({ opacity: 0.5 }, 200);
    })
})