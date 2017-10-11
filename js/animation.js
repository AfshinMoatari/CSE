$(function() {
  // init controller
  var controller = new ScrollMagic.Controller();

  // animation classes
  $('nav.main').each(function() {

    // build a tween
    var tween = new TimelineMax();
    tween.to($(this), 0, {
      css: {
        className: '+=sticky'
      }
    }, 0).to($(this).find(".nav li"), 0.3, {
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
        triggerElement: ".stick"
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('nav.secondary').each(function() {

    // build a tween
    var tween = new TimelineMax();
    tween.to($(this).find(".nav li"), 0.3, {
      scale: .8,
    }, 0).to($(this), .6, {
      top: 100
    }, 0);

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: ".stick"
      })
      .setTween(tween)
      .addTo(controller);
  });
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
    var textColor = $(this).css("background-color");
    var backgroundColor = $(this).css("color");

    // build a tween
    function over() {
      var tween = new TimelineMax();
      tween.to($(this), 0, {
        ease: Power0.easeNone,
        color: textColor,
        backgroundColor: backgroundColor,
        borderColor: textColor,
      }).to($(this).find('span'), 0, {
        ease: Power0.easeNone,
        backgroundColor: "transparent",
        top: '-5px',
        right: '-5px',
        borderWidth: '10px'
      })
    }

    function out() {
      var tween = new TimelineMax();
      tween.to($(this), duration, {
        ease: Power4.easeOut,
        color: backgroundColor,
        backgroundColor: textColor,
        borderColor: textColor,
      }).to($(this).find('span'), duration, {
        ease: Power4.easeOut,
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
