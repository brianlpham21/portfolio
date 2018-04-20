$('.nav-main-name').click(function() {
  $(document).ready(function() {
    $(this).scrollTop(0);
    window.location.reload()
  });
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= $('section').offset().top - 80) {
    $('.nav-main-name').css({'font-size': '16px', 'transition': '0.25s'});
    $('.nav-icon-item').css({'opacity': '0', 'transition': '0.5s'});
    $('nav').css({'padding': '10px 0', 'transition': '0.5s'});
  }
  else if ($(window).scrollTop() < $('section').offset().top - 80) {
    $('.nav-main-name').css({'font-size': '25px', 'transition': '0.25s'});
    $('.nav-icon-item').css({'opacity': '1', 'transition': '0.5s'});
    $('nav').css({'padding': '20px 0', 'transition': '0.5s'});
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= $('section').offset().top + 100) {
    $('.nav-icon-item').css('display', 'none');
  }
  else if ($(window).scrollTop() < $('section').offset().top + 100) {
    $('.nav-icon-item').css('display', 'inline-block');
  }
});

$(window).scroll(function() {
  $('header').css('opacity', 1 - $(window).scrollTop() / 300);
});

let background_image_parallax = function($object, multiplier) {
  multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
	multiplier = 1 - multiplier;
  let $doc = $(document);
  $object.css({"background-attatchment" : "fixed"});

	$(window).scroll(function() {
	  let from_top = $doc.scrollTop(),
	      bg_css = 'center ' +(multiplier * from_top - 60) + 'px';
	  $object.css({"background-position": bg_css });
  });
};

background_image_parallax($("header"));

$('#work').mouseover(function() {
  $('.work-icon').css({'filter': 'drop-shadow(0 0 3px #a3a3a3)', 'transition': '0.5s'});
});

$('#work').mouseout(function() {
  $('.work-icon').css('filter', 'none');
});

$('#skills').mouseover(function() {
  $('.skills-icon').css({'filter': 'drop-shadow(0 0 3px grey)', 'transition': '0.5s'});
});

$('#skills').mouseout(function() {
  $('.skills-icon').css('filter', 'none');
});

$('#about').mouseover(function() {
  $('.about-icon').css({'filter': 'drop-shadow(0 0 3px #4c4c4c)', 'transition': '0.5s'});
});

$('#about').mouseout(function() {
  $('.about-icon').css('filter', 'none');
});

$(window).scroll(function() {
  if ((($(window).scrollTop() + $(window).height()) - 100) >= $('footer').offset().top) {
    $('.footer-container').css({'opacity': '1', 'transition': '3s'});
  }
});

$('.scroll-up-arrow').click(function() {
  $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top + 'px'
  }, 700);
});
