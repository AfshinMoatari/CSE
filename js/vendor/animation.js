$(function() {
  $(window).on('beforeunload', function() {
    $(this).scrollTop(0);
  });
  if ($('body').is('#main')) {
    //fullpageJS init
    $('.fullpage').fullpage({
      scrollBar: true,
      verticalCentered: true,
      paddingTop: '60px',
    });
  }
  if ($('body').is('#collabrations')) {
    $('.mentors .tab-pane').each(function() {
      var size_col = $(this).length;
      console.log(size_col);
      x = 8;
      $(this).find('.item:lt(' + x + ')').show();
    });
    //jQuery Pagination init
    $('.pagination').twbsPagination({
      totalPages: 10,
      visiblePages: 3,
      prevClass: 'd-none',
      firstClass: 'd-none',
      lastClass: 'd-none',
      onPageClick: function(event, page) {
        $('#page-content').text('Page ' + page);
      }
    });
  }
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
  $('.fade-in-left').each(function() {
    // build a tween
    var tween = TweenMax.staggerFromTo($(this), .5, {
      x: -150,
      autoAlpha: 0
    }, {
      x: 0,
      autoAlpha: 1,
      force3D: true,
      ease: Quad.easeInOut
    }, 0.1);
    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0],
        triggerHook: .8,
        reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.fade-in-right').each(function() {
    // build a tween
    var tween = TweenMax.staggerFromTo($(this), .5, {
      x: 150,
      autoAlpha: 0
    }, {
      x: 0,
      autoAlpha: 1,
      force3D: true,
      ease: Quad.easeInOut
    }, 0.1);

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0],
        triggerHook: .8,
        reverse: false
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
        triggerElement: $(this).parents('.animate').first()[0],
        reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.square').each(function() {
    var duration = .5;
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
          width: maxWidth,
          ease: Quad.easeInOut,
        })
      } else if (maxHeight !== 'none') {
        tween.fromTo($(this), duration, {
          autoAlpha: 0,
          height: $(this).css("min-height")
        }, {
          autoAlpha: 1,
          height: maxHeight,
          ease: Quad.easeInOut,
        })
      }
    });

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0],
        triggerHook: .8,
        reverse: false
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
  $('#cse-proof-plan').each(function() {
    var lines = $(this).find('.line');
    var bubbles = $(this).find('.bubble');
    var texts = $(this).find('.text');
    // build a tween
    tween = new TimelineMax();
    var tween = tween.to(lines[4], .1, {
      css: {
        className: '+=active',
        animationDuration: '5s'
      }
    }, 0).to(bubbles[4], .1, {
      css: {
        opacity: 1,
        className: '+=active',
        animationDuration: '.5s'
      }
    }, 0.5).from(texts[4], 1, {
      autoAlpha: 0,
      x: '-=40'
    }, 0.5).to(lines[3], .1, {
      css: {
        className: '+=active',
        animationDuration: '3.5s'
      }
    }, 1).to(bubbles[3], .1, {
      css: {
        opacity: 1,
        className: '+=active',
        animationDuration: '.5s'
      }
    }, 2).from(texts[3], 1, {
      autoAlpha: 0,
      x: '+=40'
    }, 2).to(lines[2], .1, {
      css: {
        className: '+=active',
        animationDuration: '5s'
      }
    }, 2).to(bubbles[2], .1, {
      css: {
        opacity: 1,
        className: '+=active',
        animationDuration: '.5s'
      }
    }, 2.7).from(texts[2], 1, {
      autoAlpha: 0,
      x: '+=40'
    }, 2.7).to(lines[1], .1, {
      css: {
        className: '+=active',
        animationDuration: '5s'
      }
    }, 3).to(bubbles[1], .1, {
      css: {
        opacity: 1,
        className: '+=active',
        animationDuration: '.5s'
      }
    }, 3.7).from(texts[1], 1, {
      autoAlpha: 0,
      x: '+=40'
    }, 3.7).to(lines[0], .1, {
      css: {
        className: '+=active',
        animationDuration: '5s'
      }
    }, 3).to(bubbles[0], .1, {
      css: {
        opacity: 1,
        className: '+=active',
        animationDuration: '.5s'
      }
    }, 4.4).from(texts[0], 1, {
      autoAlpha: 0,
      x: '-=40'
    }, 4.4);
    tween.play()

  });
  $('.staggered-fade-items').each(function() {
    var items = $(this).find('.item').toArray();
    var tween = TweenMax.set(items, {
      scale: .5,
      autoAlpha: 0
    });
    items.sort(function() {
      return 0.5 - Math.random()
    });
    var tween = TweenMax.staggerTo(items, .4, {
      autoAlpha: 1,
      scale: 1,
      ease: Quad.easeInOut,
      delay: 0.5,
      force3D: true
    }, 0.2);

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0],
        triggerHook: .8,
        reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  })
  $('.the-team').find('.row').each(function() {
    var items = $(this).find('.item').toArray();
    var tween = TweenMax.set(items, {
      autoAlpha: 0
    });
    var tween = TweenMax.staggerTo(items, .6, {
      autoAlpha: 1,
      ease: Quad.easeInOut,
      delay: 0.1,
      force3D: true
    }, 0.2);

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this)[0],
        triggerHook: .8,
        reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  })
  $('.list-fade-left').each(function() {
    var items = $(this).find('li.text');
    var anchor = $(this).find('li.anchor');
    var tween = new TimelineMax();
    tween.set(items, {
      autoAlpha: 0,
      x: -150
    }).set(anchor, {
      autoAlpha: 0,
    }).staggerTo(items, .5, {
      autoAlpha: 1,
      x: 0,
      ease: Quad.easeInOut,
      delay: 0.1,
      force3D: true
    }, 0.1).staggerTo(anchor, .5, {
      autoAlpha: 1,
      ease: Quad.easeInOut,
      delay: .2,
      force3D: true
    }, 0.2);
    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0],
        triggerHook: .8,
        reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  })
  $('.about-page').each(function() {
    var ContentLeft = $(this).find('.overlay-animation.left .overlay-container');
    var TransformLeft = $(this).find('.overlay-animation.left .overlay-transform');
    var ContentRight = $(this).find('.overlay-animation.right .overlay-container');
    var TransformRight = $(this).find('.overlay-animation.right .overlay-transform');
    var logo = $(this).find('.logo');
    var duration = .6;
    var delay = duration;
    var tween = new TimelineMax();
    if ($(this).hasClass("wait")) {
      var delay = 2.2;
      tween.set(logo, {
        scale: 1.4
      }).to(logo, duration, {
        scale: 1
      }, 3.8).to(logo.find('#cse-hero'), duration, {
        fill: '#fff'
      }, 3.8).to(logo.find('span'), duration, {
        backgroundColor: '#fff'
      }, 3.8);
    }
    tween.fromTo(TransformLeft, duration, {
        transformOrigin: "top left",
        scaleX: 0
      }, {
        transform0rigin: 'top right',
        scaleX: 1
      }, delay)
      .fromTo(ContentLeft, 0, {
        opacity: 0
      }, {
        opacity: 1
      }, delay + duration)
      .to(TransformLeft, duration, {
        transformOrigin: 'top right',
        scaleX: 0
      }, delay + duration)
      .to(ContentLeft, .25, {
        left: '0'
      }, '-=.75')
      .fromTo(TransformRight, duration, {
        transformOrigin: "top right",
        scaleX: 0
      }, {
        transform0rigin: 'top left',
        scaleX: 1
      }, delay)
      .fromTo(ContentRight, 0, {
        opacity: 0
      }, {
        opacity: 1
      }, delay + duration)
      .to(TransformRight, duration, {
        transformOrigin: 'top left',
        scaleX: 0
      }, delay + duration)
      .to(ContentRight, .25, {
        right: '0'
      }, '-=.75');

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this)[0],
        triggerHook: .8
      })
      .setTween(tween)
      .addTo(controller);
  })
  $('.proof-program').find('.item').each(function() {
    var svg = $(this).find('.svg-container');
    var title = $(this).find('h5');
    var info = $(this).find('p');
    var date = $(this).find('span');
    var anchor = $(this).find('a');
    var tween = new TimelineMax();

    tween.staggerFromTo(svg, 1, {
      scale: 0,
      rotation: 245
    }, {
      scale: 1,
      opacity: 1,
      rotation: 360,
      force3D: true,
      ease: Back.easeInOut
    }, 0.1).staggerFromTo([title, info, date], .5, {
      x: 150,
      autoAlpha: 0
    }, {
      x: 0,
      autoAlpha: 1,
      force3D: true,
      ease: Quad.easeInOut
    }, 0.1).staggerFromTo(anchor, .5, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      ease: Quad.easeInOut,
      delay: .3,
      force3D: true
    });

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0],
        triggerHook: .5,
        reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.hero').each(function() {
    var tween = TweenMax.staggerFromTo($(this), 4, {
      backgroundColor: 'transparent',
    }, {
      backgroundColor: '#496093',
      ease: Back.easeOut.config(1)
    });
    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this)[0],
        triggerHook: .8,
        reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.quotations').find('.blockquote').each(function() {
    var body = $(this).find('span');
    var footer = $(this).find('footer');
    var tween = new TimelineMax();

    if ($(this).hasClass("left")) {
      tween.staggerFromTo([body, footer], .5, {
        x: 150,
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        force3D: true,
        ease: Quad.easeInOut
      }, 0.1);

    } else if ($(this).hasClass("right")) {
      tween.staggerFromTo([body, footer], .5, {
        x: -150,
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        force3D: true,
        ease: Quad.easeInOut
      }, 0.1);
    }


    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0],
        triggerHook: .8,
        reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.resources-research ').find('.item').each(function() {
    var title = $(this).find('h4');
    var info = $(this).find('p');
    var anchor = $(this).find('a');
    var tween = new TimelineMax();

    if ($(this).hasClass("left")) {
      tween.staggerFromTo([title, info, anchor], .5, {
        x: 150,
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        force3D: true,
        ease: Quad.easeInOut
      }, 0.1);

    } else if ($(this).hasClass("right")) {
      tween.staggerFromTo([title, info, anchor], .5, {
        x: -150,
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        force3D: true,
        ease: Quad.easeInOut
      }, 0.1);
    }
    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0],
        triggerHook: .8,
        reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.accelerator-program').find('.item').each(function() {
    var title = $(this).find('h4');
    var info = $(this).find('p');
    var anchor = $(this).find('a');
    var tween = new TimelineMax();

    if ($(this).hasClass("left")) {
      tween.staggerFromTo([title, info], .5, {
        x: 150,
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        force3D: true,
        ease: Quad.easeInOut
      }, 0.1).staggerFromTo(anchor, .5, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        ease: Quad.easeInOut,
        delay: .3,
        force3D: true
      });

    } else if ($(this).hasClass("right")) {
      tween.staggerFromTo([title, info], .5, {
        x: -150,
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        force3D: true,
        ease: Quad.easeInOut
      }, 0.1).staggerFromTo(anchor, .5, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        ease: Quad.easeInOut,
        delay: .3,
        force3D: true
      });
    }
    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0],
        triggerHook: .8,
        reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.s-media, .s-single').find('.info').each(function() {
    var title = $(this).find('h4');
    var info = $(this).find('p');
    var anchor = $(this).find('a');
    var tween = new TimelineMax();

    if ($(this).hasClass("left")) {
      tween.staggerFromTo([title, info], .5, {
        x: 150,
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        force3D: true,
        ease: Quad.easeInOut
      }, 0.1).staggerFromTo(anchor, .5, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        ease: Quad.easeInOut,
        delay: .3,
        force3D: true
      });

    } else if ($(this).hasClass("right")) {
      tween.staggerFromTo([title, info], .5, {
        x: -150,
        autoAlpha: 0
      }, {
        x: 0,
        autoAlpha: 1,
        force3D: true,
        ease: Quad.easeInOut
      }, 0.1).staggerFromTo(anchor, .5, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        ease: Quad.easeInOut,
        delay: .3,
        force3D: true
      });
    }
    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0],
        triggerHook: .8,
        reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.block-fade-in-right').each(function() {
    var title = $(this).find('h4');
    var info = $(this).find('p');
    var tween = new TimelineMax();
    // build a tween
    var tween = TweenMax.staggerFromTo([title, info], .5, {
      x: 150,
      autoAlpha: 0
    }, {
      x: 0,
      autoAlpha: 1,
      force3D: true,
      ease: Quad.easeInOut
    }, 0.1);

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: $(this).parents('.animate').first()[0],
        triggerHook: .8,
        reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  });
  $('.portfolio').each(function() {
    if ($(this).hasClass('side')) {
      var sidebarButtons = $('.toggle-sidebar');
      sidebarButtons.each(function() {
        var currentAttr = $(this).attr('href');
        var currentSidebar = $("[data-anchor=" + currentAttr + "]");

        $(this).click(function(e0) {
          e0.preventDefault();
          var otherSidebars = $('.item-sidebar').not(currentSidebar);
          otherSidebars.removeClass('open');
          var tween = new TimelineMax();
          tween.staggerFromTo(currentSidebar, .8, {
            left: '200vw'
          }, {
            left: '50%',
            ease: Back.easeOut.config(1.4)
          }, .1);
          var tween1 = new TimelineMax();
          tween1.staggerTo(otherSidebars, .6, {
            left: '200%',
            ease: Power0.easeNone
          }, .1);
          currentSidebar.toggleClass('open');
          if (currentSidebar.hasClass('open')) {
            tween.play();
          } else {
            tween1.play();
          }
          $(document).click(function(e1) {
            if (currentSidebar.hasClass('open')) {
              var target = e1.target.className;
              if ($.trim(target) != '') {
                if ($("." + target) != currentSidebar) {
                  tween.reverse(.6);
                  currentSidebar.removeClass('open');
                }
              }
            }
          });
        });
      });
    }



    var panel = $(this).find('.tab-pane');
    panel.each(function() {
      var items = $(this).find('.item').toArray();
      var tween = TweenMax.set(items, {
        autoAlpha: 0
      });
      var tween = TweenMax.staggerTo(items, .6, {
        autoAlpha: 1,
        ease: Quad.easeInOut,
        delay: 0.1,
        force3D: true
      }, 0.2);

      var scene = new ScrollMagic.Scene({
          triggerElement: $(this)[0],
          triggerHook: .8,
          reverse: true
        })
        .setTween(tween)
        .addTo(controller);
    });




  });

});