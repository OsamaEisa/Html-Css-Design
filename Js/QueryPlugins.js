/*global $, jQuery, alert, console */

$(function() {
  'use strict';

  $('div').click(function() {
      $(this).replaceWith("<input type='text' value = ' " + $(this).text() + "' > ");
      $('button').fadeIn();
  });

  $('button').click(function() {
      $('input').replaceWith("<div> Welcome " + $('input').val() + "</div>");
      $('button').hide();
  });

});



/* Resize ****************************** Resize ******************************
$(function() {
  "use strict";
  $(window).on("resize", function(){
    var wid = $(window).width(),
      hei = $(window).height();

    console.log(wid, hei);
  });

});
*/
/* Change ****************************** Change *********************************

$(function() {
  "use strict";

  $("input").on("change", function() {
     $("div h3").text($(this).val());
   });

  $("textarea").on("change", function () {
     $("div p").text( $(this).val());
     });

  $("select").on("change", function(){
    $("div").text("You choosed to buy : " + $(this).val());
  });
});
*/

/* keydown & keypress & keyup **************** keydown & keypress & keyup ******

$(function() {
  "use strict";
  // Custom Event with keydown & keypress & keyup
  $("input").on("keyup", function() {
     $("div h3").text($(this).val());
   });

   $("textarea").on("keyup", function () {
     $("div p").text( $(this).val());
     });
});

*/

/* Bind ****************************** Bind *********************************
$(function(){
  "use strict";
  // Single Event
  $(".normal").bind("click", function() {
    $(this).fadeOut();
  });
  // Multi Event
  $(".normal").bind("mouseenter mouseleave", function() {
    $(this).toggleClass("color");
  });
  // Map Event
  $(".map").bind({
    click: function() { $(this).text("you have clicked me"); },
    dblclick: function () { $(this).text("you have double clicked me"); },
    mouseenter: function () { $(this).text("you mouseenter here"); },
    mouseleave: function () { $(this).text("you mouseleave here"); }
  });
   // Custom Event
  $(".custom").bind("myCustomEvent", function(event, myName, myAge) {
    $(this).text("Hello " + myName + " your age is : " + myAge);
  });
  $("button").click(function () {
    $(".custom").trigger("myCustomEvent", ["Osama", "23" ]);
    });

});
*/
// ------------------****************************-----------------------------
  /* $(".left").click(function(){
    $(this).width("+=" + 50);
    $(".right").width("-=" + 50)
  });
  $(".right").click(function(){
    $(this).width("+=" + 50);
    $(".left").width("-=" + 50)
  });
});
*/
/*
$(function() {
  $("button").click(function() {
    $("div").fadeIn();
  });
});
*/
