$(function() {
  // init controller
  var controller = new ScrollMagic.Controller();

  $('.fade-in').each(function() {

    var duration = $(this).attr('duration-fade');
    var delay = $(this).attr('delay');
    // build a tween
    var tween = TweenMax.from($(this), duration, {
      autoAlpha: 0,
      scale: 1.3,
      y: '+=30',
      ease: Linear.easeNone,
      delay: delay
    });

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0]
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.fade-in-left').each(function() {

    var duration = $(this).attr('duration-fade');
    var delay = $(this).attr('delay');
    // build a tween
    var tween = TweenMax.from($(this), duration, {
      autoAlpha: 0,
      x: '-=180',
      ease: Power4.easeIn,
      delay: delay
    });

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0]
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.fade-in-right').each(function() {

    var duration = $(this).attr('duration-fade');
    var delay = $(this).attr('delay');
    // build a tween
    var tween = TweenMax.from($(this), duration, {
      autoAlpha: 0,
      x: '+=180',
      ease: Power4.easeIn,
      delay: delay
    });

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0]
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.flipping-number').each(function() {

    var delay = $(this).attr('delay');
    var duration = $(this).attr('duration-fade');
    var object = $(this)[0];
    var max = $(this).attr('max');
    var min = {
      var: $(this).attr('min')
    };

    // build a tween
    var tween = TweenMax.to(min, duration, {
      var: max,
      onUpdate: function() {
        object.innerHTML = Math.ceil(min.var);
      },
      ease: Circ.easeOut,
      delay: delay
    });

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0]
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.square').each(function() {

    var duration = $(this).attr('duration-square');

    var i1 = $(this).children(':nth-child(1)');
    var i2 = $(this).children(':nth-child(2)');
    var i3 = $(this).children(':nth-child(3)');
    var i4 = $(this).children(':nth-child(4)');

    var a1 = $(this).children(':nth-child(1)')[0];
    var a2 = $(this).children(':nth-child(2)')[0];
    var a3 = $(this).children(':nth-child(3)')[0];
    var a4 = $(this).children(':nth-child(4)')[0];

    var from1 = i1.css("min-width");
    var to1 = i1.css("max-width");

    var from2 = i2.css("min-height");
    var to2 = i2.css("max-height");

    var from3 = i3.css("min-width");
    var to3 = i3.css("max-width");

    var from4 = i4.css("min-height");
    var to4 = i4.css("max-height");

    // build a tween
    var tween = new TimelineMax();
    tween.fromTo(a1, duration, {
        width: from1
      }, {
        width: to1
      })
      .fromTo(a2, duration, {
        height: from2
      }, {
        height: to2
      })
      .fromTo(a3, duration, {
        width: from3
      }, {
        width: to3
      })
      .fromTo(a4, duration, {
        height: from4
      }, {
        height: to4
      });


    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0]
      })
      .setTween(tween)
      .addTo(controller);
  });

});

// hero color transition
var heroTransition = TweenMax.to(".hero", 1.5, {
  backgroundColor: "#496093"
});



// $(function() {
//
//   // init controller
//   var controller = new ScrollMagic.Controller();
//
//   // sticky navbar scene
//   var slideDown = TweenMax.to("nav", .5, {
//     height: 330
//   });
//
//   var navEvents = new TimelineMax()
//     .add([
//       slideDown
//     ]);
//
//   var scene = new ScrollMagic.Scene({
//       triggerElement: ".status"
//     })
//     .setTween(navEvents)
//     .setClassToggle("nav", "sticky")
//     .addTo(controller)
//     .on("enter", function(event) {
//       slideDown.reverse();
//     })
//     .on("leave", function(event) {
//       slideDown.play();
//     })
//     .addIndicators({
//       name: "stickyNavbar"
//     });
//
//   // hero color transition
//   var heroTransition = TweenMax.to(".hero", 1.5, {
//     backgroundColor: "#496093"
//   });
//
//   //square
//   TweenMax.set(".square", {
//     visibility: "visible"
//   });
//
//   var tl = new TimelineMax();
//   tl.fromTo(".l4", 3, {
//       width: 110
//     }, {
//       width: 110
//     })
//     .fromTo(".l1", 3, {
//       height: 0
//     }, {
//       height: 220
//     })
//     .fromTo(".l2", 3, {
//       width: 0
//     }, {
//       width: 220
//     })
//     .fromTo(".l3", 3, {
//       height: 0
//     }, {
//       height: 110
//     })
//
//   tl.timeScale(4) //play faster
// });
