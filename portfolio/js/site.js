$(document).ready(function() {
  var email = $('.email');
  email.attr("href", "mailto:" + "PeterMBenjamin@" + "gmail.com");

  $(".rotate").textrotator({
    animation: "dissolve",
    separator: ",",
    speed: 3000
  });
});
