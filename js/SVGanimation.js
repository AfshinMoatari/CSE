$(function() {
  var cbsHero = document.getElementById("cbs-hero");
  var cseProofPlan = document.getElementById("cse-proof-plan");
  if (cbsHero) {
    cbsHero.addEventListener("load", function() {
      var doc = this.getSVGDocument();
      var mask = doc.getElementById("mask");
      var text = doc.getElementById("text").childNodes;
      // build a tween
      tween = new TimelineMax();

      var tween = TweenMax.from($(this), .4, {
        autoAlpha: 0,
        delay: 2
      }, {
        autoAlpha: 1
      });
      var baseDuration = 1.4;
      var baseDelay = 2;
      for (var i = 0; i < text.length; i++) {
        var tween = TweenMax.from(text[i], baseDuration, {
          autoAlpha: 0,
          ease: Circ.easeOut,
          delay: baseDelay += .1
        });
      }
      var tween = TweenMax.fromTo(mask, .6, {
        fillOpacity: 1,
      }, {
        fillOpacity: 0,
        delay: 2
      });
      tween.play()
    });
  }
  if (cseProofPlan) {
    cseProofPlan.addEventListener("load", function() {
      var doc = this.getSVGDocument();
      var lines = doc.getElementsByClassName("line");
      var clouds = doc.getElementsByClassName("cloud");
      var bubbles = doc.getElementsByClassName("bubble");
      var texts = doc.getElementsByClassName("text");


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
  }



});
