$('.nav-main-name').click(function() {
  $(document).ready(function() {
    $(this).scrollTop(0);
    window.location.reload()
  });
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= $('section').offset().top - 80) {
    $('.nav-main-name').css({'font-size': '16px', 'top': '15px','transition': '0.25s'});
    $('.nav-icon-item').css({'opacity': '0', 'transition': '0.5s'});
    $('.nav-mail-icon-text').css({'opacity': '0', 'transition': '0.5s'});
    $('nav').css({'padding': '10px 0', 'transition': '0.5s'});
  }
  else if ($(window).scrollTop() < $('section').offset().top - 80) {
    $('.nav-main-name').css({'font-size': '25px', 'top': '20px', 'transition': '0.25s'});
    $('.nav-icon-item').css({'opacity': '1', 'transition': '0.5s'});
    $('.nav-mail-icon-text').css({'opacity': '1', 'transition': '0.5s'});
    $('nav').css({'padding': '20px 0', 'transition': '0.5s'});
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= $('section').offset().top + 100) {
    $('.nav-icon-item').css('display', 'none');
    $('.nav-mail-icon-text').css('display', 'none');
    $('.hidden-nav-icon-item').removeClass('hidden');
    setTimeout(function() {
      $('.hidden-nav-icon-item').css({'opacity': '1', 'transition': '1s'});
    }, 300);
  }
  else if ($(window).scrollTop() < $('section').offset().top + 100) {
    $('.nav-icon-item').css('display', 'inline-block');
    $('.nav-mail-icon-text').css('display', 'inline-block');
    $('.hidden-nav-icon-item').addClass('hidden');
    $('.hidden-nav-icon-item').css('opacity', '0');
  }
});

$(window).scroll(function() {
  $('header').css('opacity', 1 - $(window).scrollTop() / 500);
});

let background_image_parallax = function($object, multiplier) {
  multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
	multiplier = 1 - multiplier;
  let $doc = $(document);
  $object.css({"background-attatchment" : "fixed"});

	$(window).scroll(function() {
	  let from_top = $doc.scrollTop(),
	      bg_css = 'center ' +(multiplier * from_top) + 'px';
	  $object.css({"background-position": bg_css });
  });
};

background_image_parallax($("header"));

$('#work').mouseover(function() {
  $('.work-icon').css({'filter': 'drop-shadow(0 0 3px #a3a3a3)', 'transition': '0.5s'});
  $('.work-section-title').css({'text-shadow': '0 0 1px dimGrey', 'transition': '0.5s'});
});

$('#work').mouseout(function() {
  $('.work-icon').css('filter', 'none');
  $('.work-section-title').css('text-shadow', 'none');
});

$('#skills').mouseover(function() {
  $('.skills-icon').css({'filter': 'drop-shadow(0 0 3px grey)', 'transition': '0.5s'});
  $('.skills-section-title').css({'text-shadow': '0 0 1px dimGrey', 'transition': '0.5s'});
});

$('#skills').mouseout(function() {
  $('.skills-icon').css('filter', 'none');
  $('.skills-section-title').css('text-shadow', 'none');
});

$('#about').mouseover(function() {
  $('.about-icon').css({'filter': 'drop-shadow(0 0 3px #4c4c4c)', 'transition': '0.5s'});
  $('.about-section-title').css({'text-shadow': '0 0 1px dimGrey', 'transition': '0.5s'});
});

$('#about').mouseout(function() {
  $('.about-icon').css('filter', 'none');
  $('.about-section-title').css('text-shadow', 'none');
});

$('.application-details li').mouseover(function() {
  $(this).css({'letter-spacing': '1px', 'transition': '0.5s'});
});

$('.application-details li').mouseout(function() {
  $(this).css('letter-spacing', '0');
});

$('.front-end-skill-section').mouseover(function() {
  $('.front-end-skill-icon').css({'filter': 'drop-shadow(0 0 1px #4c4c4c)','transition': '0.5s'});
  $(this).css({'background-color': 'lightBlue', 'transition': '0.5s'});
  $('.front-end-icons img').css({'filter': 'none', 'transition': '0.5s'});
});

$('.front-end-skill-section').mouseout(function() {
  $('.front-end-skill-icon').css('filter', 'none');
  $(this).css({'background-color': '#e0e0e0', 'box-shadow': 'none', 'transition': '0.5s'});
  $('.front-end-icons img').css({'filter': 'grayscale(1)', 'transition': '0.5s'});
});

$('.back-end-skill-section').mouseover(function() {
  $('.back-end-skill-icon').css({'filter': 'drop-shadow(0 0 1px #4c4c4c)', 'transition': '0.5s'});
  $(this).css({'background-color': '#b5dbe8', 'transition': '0.5s'});
  $('.back-end-icons img').css({'filter': 'none', 'transition': '0.5s'});
});

$('.back-end-skill-section').mouseout(function() {
  $('.back-end-skill-icon').css('filter', 'none');
  $(this).css({'background-color': '#e0e0e0', 'transition': '0.5s'});
  $('.back-end-icons img').css({'filter': 'grayscale(1)', 'transition': '0.5s'});
});

$('.development-skill-section').mouseover(function() {
  $('.development-skill-icon').css({'filter': 'drop-shadow(0 0 1px #4c4c4c)', 'transition': '0.5s'});
  $(this).css({'background-color': '#bddfeb', 'transition': '0.5s'});
  $('.development-icons img').css({'filter': 'none', 'transition': '0.5s'});
});

$('.development-skill-section').mouseout(function() {
  $('.development-skill-icon').css('filter', 'none');
  $(this).css({'background-color': '#e0e0e0', 'transition': '0.5s'});
  $('.development-icons img').css({'filter': 'grayscale(1)', 'transition': '0.5s'});
});

$('.authentication-skill-section').mouseover(function() {
  $('.authentication-skill-icon').css({'filter': 'drop-shadow(0 0 1px #4c4c4c)', 'transition': '0.5s'});
  $(this).css({'background-color': '#c5e3ed', 'transition': '0.5s'});
});

$('.authentication-skill-section').mouseout(function() {
  $('.authentication-skill-icon').css('filter', 'none');
  $(this).css({'background-color': '#e0e0e0', 'transition': '0.5s'});
});

$('.architecture-skill-section').mouseover(function() {
  $('.architecture-skill-icon').css({'filter': 'drop-shadow(0 0 1px #4c4c4c)', 'transition': '0.5s'});
  $(this).css({'background-color': '#cde7f0', 'transition': '0.5s'});
});

$('.architecture-skill-section').mouseout(function() {
  $('.architecture-skill-icon').css('filter', 'none');
  $(this).css({'background': '#e0e0e0', 'transition': '0.5s'});
});

$('.about-section').mouseover(function() {
  $(this).children('.about-title').css({'letter-spacing': '1px', 'transition': '0.5s'});
});

$('.about-section').mouseout(function() {
  $(this).children('.about-title').css('letter-spacing', '0');
});

$(window).scroll(function() {
  if ((($(window).scrollTop() + $(window).height()) - 100) >= $('footer').offset().top) {
    $('.footer-container').css({'opacity': '1', 'transition': '3s'});
  }
});

$('.scroll-up-arrow').click(function() {
  $('html').animate({
      scrollTop: '0px'
  }, 1200);
});
