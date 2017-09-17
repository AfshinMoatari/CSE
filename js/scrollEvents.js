$(function() {

  // init controller
  var controller = new ScrollMagic.Controller();

  // sticky navbar scene
  var slideDown = TweenMax.fromTo("nav", .3, {
    height: 130
  }, {
    height: 0
  });

  var navEvents = new TimelineMax()
    .add([
      slideDown
    ]);

  var scene = new ScrollMagic.Scene({
      triggerElement: ".status"
    })
    .setTween(navEvents)
    .setClassToggle("nav", "sticky-top")
    .addTo(controller)
    .on("enter", function(event) {
      slideDown.reverse();
    })
    .on("leave", function(event) {
      slideDown.play();
    })
    .addIndicators();


});
