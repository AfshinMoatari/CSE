$(window).on('load resize', function() {

  // items
  var CSEProofPlan = $("#cse-proof-plan");

  // xsm
  if (Modernizr.mq("(max-width: 353px)")) {
    CSEProofPlan.attr("viewBox", "0 -100 635 635");
  }
  // sm
  if (Modernizr.mq("(min-width: 353px)")) {
    CSEProofPlan.attr("viewBox", "0 -65 700 600");
  }
  // md
  if (Modernizr.mq("(min-width: 768px)")) {
    CSEProofPlan.attr("viewBox", "-250 0 1200 535");
  }
  // lg
  if (Modernizr.mq("(min-width: 992px)")) {
    CSEProofPlan.attr("viewBox", "-50 0 750 535");
  }

});
