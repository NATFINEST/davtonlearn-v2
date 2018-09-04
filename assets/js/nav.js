$(document).ready(function() {
  $('#enroll').addClass('d-none');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 280) {
      $('#nav_pmp').addClass('pos-fx');
    }
    if ($(window).scrollTop() < 281) {
      $('#nav_pmp').removeClass('pos-fx');
    }

    if ($(window).scrollTop() > 565) {
      	$('#enroll').addClass('d-lg-block');
  	}
  	if ($(window).scrollTop() < 566) {
    	$('#enroll').removeClass('d-lg-block');
    	$('#enroll').addClass('d-none');
  	}
  });


if ( ! window.console ) console = { log: function(){} };

// The actual plugin
$('.single-page-nav').singlePageNav({
    offset: $('.single-page-nav').outerHeight(),
    filter: ':not(.external)',
    updateHash: true
});
});

        $(document).on('click', 'div .dropdown-menu', function (e) {
        e.stopPropagation();
      });
      $('.request').click(function() {
        $(this).parents('.dropup').find('a.dropdown-toggle').dropdown('toggle')
      });
      $("#hide").click(function(){
          $(".ad").hide();
      });
      $("#signup-link").click(function(){
        $('#login').modal('hide');
        $('#signup').modal('show');
      });
      $("#login-link").click(function(){
        $('#login').modal('show');
        $('#signup').modal('hide');
      });
