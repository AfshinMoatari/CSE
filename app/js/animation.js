$(function() {
  // init controller
  var controller = new ScrollMagic.Controller();
  // animation classes
  $('nav.main').each(function() {

    // build a tween
    var tween = new TimelineMax();
    tween.to($(this).find(".nav li"), .3, {
      scale: .7
    }, 0).to($(this), .3, {
      height: 60,
      backgroundColor: '#496093'
    }, 0).to($(this).find(".nav li"), .3, {
      css: {
        className: '-=align-self-end mx-2'
      }
    }, 0).to($(this).find(".collapse"), .3, {
      css: {
        marginBottom: '5px'
      }
    }, 0).to($(this).find(".nav li"), .36, {
      marginLeft: 5
    }, 0).to($(this).find(".navbar-brand img"), .3, {
      width: '36px'
    }, 0).to($(this).find(".navbar-toggler"), .3, {
      scale: .75
    }, 0).to($(this).find(".navbar-toggler"), .3, {
      css: {
        className: '-=my-4'
      }
    }, 0);

    // build a scene
    var scene = new ScrollMagic.Scene({
        duration: 600,
        triggerHook: "onEnter"
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.navbar-toggler').each(function() {

    // build a tween
    var tween = new TimelineMax({
      reversed: true
    });
    tween.fromTo($('.overlay-nav'), .3, {
      opacity: 0
    }, {
      opacity: 1
    });
    $(this).click(function() {
      tween.reversed() ? tween.play() : tween.reverse();
      $('.navbar-toggler').toggleClass('active');
    });
  });
  $('nav.secondary').each(function() {

    // build a tween
    var tween = new TimelineMax();
    tween.to($(this), .3, {
      top: 60
    }, 0);

    // build a scene
    var scene = new ScrollMagic.Scene({
        duration: 600,
        triggerHook: "onEnter"
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
  $('.btn-primary.dark').each(function() {

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
  $('.btn-primary.light').each(function() {

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
        borderColor: textColor
      }).to($(this).find('span'), 0, {
        ease: Power0.easeNone,
        backgroundColor: "transparent",
        borderColor: backgroundColor,
        top: '-5px',
        right: '-5px',
      })
    }

    function out() {
      var tween = new TimelineMax();
      tween.to($(this), duration, {
        ease: Power4.easeOut,
        color: backgroundColor,
        backgroundColor: textColor,
        borderColor: backgroundColor
      }).to($(this).find('span'), duration, {
        ease: Power4.easeOut,
        backgroundColor: textColor,
        borderColor: backgroundColor,
        top: '-10px',
        right: '-10px',
      })
    }

    // call a hover scene
    $(this).hover(over, out);
  });
  $('.btn-secondary:not(.active)').each(function() {

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
        borderColor: backgroundColor,
      })
    }

    function out() {
      var tween = new TimelineMax();
      tween.to($(this), duration, {
        ease: Power4.easeOut,
        color: backgroundColor,
        backgroundColor: textColor,
        borderColor: backgroundColor,
      })
    }

    // call a hover scene
    $(this).hover(over, out);
  });
  $('.checkbox > a').each(function() {

    // build a tween
    function over() {
      var tween = new TimelineMax();
      tween.set($(this).parent(), {
        css: {
          className: '+=active-h'
        }
      }, 0)
      $('.checkbox > a').not(this).each(function() {
        tween.set($(this).parent(), {
          opacity: 0.5
        }, 0)
      });
    }

    function out() {
      var tween = new TimelineMax();
      tween.set($(this).parent(), {
        css: {
          className: '-=active-h'
        }
      }, 0)
      $('.checkbox > a').not(this).each(function() {
        tween.set($(this).parent(), {
          opacity: 1
        }, 0)
      });
    }

    // call a hover scene
    $(this).hover(over, out);
  });
  $('.main .nav-link:not(button)').each(function() {

    // build a tween
    function over() {
      var tween = new TimelineMax();
      $('.main .nav-link:not(button)').not(this).each(function() {
        tween.to($(this), .2, {
          opacity: 0.6
        }, 0)
      });
    }

    function out() {
      var tween = new TimelineMax();
      $('.main .nav-link:not(button)').not(this).each(function() {
        tween.to($(this), .4, {
          opacity: 1
        }, 0)
      });
    }

    // call a hover scene
    $(this).hover(over, out);
  });
  $('.typewriter').each(function() {

    var duration = $(this).attr('duration');
    var mySplitText = new SplitText($(this), {
      type: "words,chars"
    });
    var chars = mySplitText.chars;
    // build a tween
    var tween = TweenMax.staggerFrom(chars, duration, {
      opacity: 0,
      ease: Power1.easeIn
    }, 0.08);

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0]
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.smooth-scroll > *').each(function() {
    var toggler = $(this);
    var menuanchor = toggler.data("menuanchor");
    var trigger = $("[data-anchor=" + menuanchor + "]");

    new ScrollMagic.Scene({
        triggerElement: trigger.get(0),
        duration: 600
      })
      .on('enter', function() {
        $('.smooth-scroll > *').removeClass("active");
        $(toggler).addClass("active");
      }).addTo(controller);

    $(this).click(function() {
      if (menuanchor === 'first') {
        $('html,body').animate({
            scrollTop: 0
          },
          'slow');
      } else {
        $('html,body').animate({
            scrollTop: trigger.offset().top
          },
          'slow');
      }
    });
  });

});
