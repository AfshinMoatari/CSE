$(function() {
  // init controller
  var controller = new ScrollMagic.Controller();

  // animation classes
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
  $('.opacity').each(function() {

    var duration = $(this).attr('duration-opacity');
    var delay = $(this).attr('delay');
    // build a tween
    var tween = TweenMax.fromTo($(this), duration, {
      opacity: 0,
    }, {
      opacity: 1,
      ease: Power4.easeOut,
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
        autoAlpha: 0,
        width: from1
      }, {
        autoAlpha: 1,
        width: to1
      })
      .fromTo(a2, duration, {
        autoAlpha: 0,
        height: from2
      }, {
        autoAlpha: 1,
        height: to2
      })
      .fromTo(a3, duration, {
        autoAlpha: 0,
        width: from3
      }, {
        autoAlpha: 1,
        width: to3
      })
      .fromTo(a4, duration, {
        autoAlpha: 0,
        height: from4
      }, {
        autoAlpha: 1,
        height: to4
      });


    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0]
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('nav').each(function() {

    // build a tween
    var tween = new TimelineMax();
    tween.to($(this), 0, {
      backgroundColor: "#496093",
    }).to($(this).find(".nav li"), 0.01, {
      scale: .8,
    }).to($(this), .3, {
      height: 100
    }).to($(this).find(".nav li"), .3, {
      css: {
        className: '-=mx-3'
      }
    }).to($(this).find(".nav li"), .3, {
      marginLeft: 10
    }).to($(this).find(".navbar-brand img"), .4, {
      width: '85%'
    });

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: ".status"
      })
      .setTween(tween)
      .addTo(controller);
  });
});
