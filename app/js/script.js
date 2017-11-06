$(function() {

  // $('#tabAll').on('click',function(e){
  //   e.preventDefault();
  //   $('#tabAll').parent().addClass('active');
  //     $('.tab-pane').addClass('active in');
  //   $('[data-toggle="tab"]').parent().removeClass('active');
  // });
  $('.navbar-toggler').click(function() {
    $('.navbar-toggler').toggleClass('navbar-on');
  });
});
