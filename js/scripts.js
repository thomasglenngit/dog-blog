$(document).ready(function() {
  $("button#switch").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("button#switchB").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });

});

