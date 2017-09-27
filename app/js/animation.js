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
  $('nav').each(function() {

    // build a tween
    var tween = new TimelineMax();
    tween.to($(this), 0, {
      backgroundColor: "#496093",
    }).to($(this).find(".nav li"), 0.3, {
      scale: .8,
    }, 0).to($(this), .6, {
      height: 100
    }, 0).to($(this).find(".nav li"), .3, {
      css: {
        className: '-=mx-3'
      }
    }, 0).to($(this).find(".nav li"), .3, {
      marginLeft: 10
    }, 0).to($(this).find(".navbar-brand img"), .6, {
      width: '85%'
    }, 0);

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: ".status"
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.square').each(function() {

    var duration = $(this).attr('duration-square');

    var tween = new TimelineMax();
    $(this).children('span').each(function() {

      var maxWidth = $(this).css("max-width");
      var maxHeight = $(this).css("max-height");

      if (maxWidth !== 'none') {
        tween.fromTo($(this), duration, {
          autoAlpha: 0,
          width: $(this).css("min-width")
        }, {
          autoAlpha: 1,
          width: maxWidth
        })
      } else if (maxHeight !== 'none') {
        tween.fromTo($(this), duration, {
          autoAlpha: 0,
          height: $(this).css("min-height")
        }, {
          autoAlpha: 1,
          height: maxHeight
        })
      }

    });

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0]
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.btn-primary').each(function() {

    var duration = $(this).attr('duration-btn');
    var delay = $(this).attr('delay');
    var textColor = $(this).css("background-color");
    var backgroundColor = $(this).css("color");

    // build a tween
    function over() {
      var tween = new TimelineMax();
      tween.to($(this), 0.1, {
        ease: Sine.easeIn,
        color: textColor,
        backgroundColor: backgroundColor,
        borderColor: textColor,
      }).to($(this).find('span'), 0.1, {
        ease: Sine.easeIn,
        backgroundColor: textColor,
        top: '-6px',
        right: '-6px',
        borderWidth: '1px'
      })
    }

    function out() {
      var tween = new TimelineMax();
      tween.to($(this), 0.1, {
        ease: Sine.easeIn,
        color: backgroundColor,
        backgroundColor: textColor,
        borderColor: 'transparent',
      }).to($(this).find('span'), 0.1, {
        ease: Sine.easeIn,
        backgroundColor: backgroundColor,
        top: '-10px',
        right: '-10px',
        borderWidth: '3px'
      })
    }

    // call a hover scene
    $(this).hover(over, out);
  });

});
