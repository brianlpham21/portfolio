/* jQuery applies only to screens larger than 428px */

if ($(window).width() > 428) {

  /* Main Navigation Bar text fades out and hidden Navigation Bar Slides Down */

  $(window).scroll(function() {
    if ($(window).scrollTop() >= $('section').offset().top - 80) {
      $('.nav-main-name').css({'font-size': '16px', 'top': '15px','transition': '0.25s'});
      $('.nav-icon-item').css({'opacity': '0', 'transition': '0.5s'});
      $('.nav-mail-icon-text').css({'opacity': '0', 'transition': '0.5s'});
      $('nav').css({'padding': '10px 0', 'transition': '0.5s'});
      $('.hidden-nav-bar').css({'margin-top': '46px', 'transition': '0.5s'});
    }
    else if ($(window).scrollTop() < $('section').offset().top - 80) {
      $('.nav-main-name').css({'font-size': '25px', 'top': '20px', 'transition': '0.25s'});
      $('.nav-icon-item').css({'opacity': '1', 'transition': '0.5s'});
      $('.nav-mail-icon-text').css({'opacity': '1', 'transition': '0.5s'});
      $('nav').css({'padding': '20px 0', 'transition': '0.5s'});
      $('.hidden-nav-bar').css({'margin-top': '-10px', 'transition': '0.5s'});
    }
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() >= $('section').offset().top + 100) {
      $('.nav-icon-item').css('display', 'none');
      $('.nav-mail-icon-text').css('display', 'none');
      $('.hidden-nav-icon-item').removeClass('hidden');
      setTimeout(function() {
        $('.hidden-nav-icon-item').css({'opacity': '1', 'transition': '1s'});
      }, 50);
    }
    else if ($(window).scrollTop() < $('section').offset().top + 100) {
      $('.nav-icon-item').css('display', 'inline-block');
      $('.nav-mail-icon-text').css('display', 'inline-block');
      $('.hidden-nav-icon-item').addClass('hidden');
      $('.hidden-nav-icon-item').css('opacity', '0');
    }
  });

  /* Hidden Navigation Bar buttons */

  $('.nav-bar-work').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
          scrollTop: $("#work").offset().top - 70
      }, 1000);
  });

  $('.nav-bar-dev-skills').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
          scrollTop: $("#skills").offset().top - 70
      }, 1000);
  });

  $('.nav-bar-about').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
          scrollTop: $("#about").offset().top - 70
      }, 1000);
  });

  /* Header opacity and parallax with scroll */

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

  /* Main Section Mouseover */

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

  /* Application details mouseover - expands letter spacing */

  $('.application-details li').mouseover(function() {
    $(this).css({'letter-spacing': '1px', 'transition': '0.5s'});
  });

  $('.application-details li').mouseout(function() {
    $(this).css('letter-spacing', '0');
  });

  /* Skill Section Mouseover */

  $('.front-end-skill-section').mouseover(function() {
    $('.front-end-skill-icon').css({'filter': 'drop-shadow(0 0 1px #4c4c4c)','transition': '0.5s'});
    $(this).css({'background-color': '#e5e8f7', 'transition': '0.5s'});
    $('.front-end-icons img').css({'filter': 'none', 'transition': '0.5s'});
  });

  $('.front-end-skill-section').mouseout(function() {
    $('.front-end-skill-icon').css('filter', 'none');
    $(this).css({'background-color': '#ced2de', 'transition': '0.5s'});
  });

  $('.back-end-skill-section').mouseover(function() {
    $('.back-end-skill-icon').css({'filter': 'drop-shadow(0 0 1px #4c4c4c)', 'transition': '0.5s'});
    $(this).css({'background-color': '#e5e8f7', 'transition': '0.5s'});
    $('.back-end-icons img').css({'filter': 'none', 'transition': '0.5s'});
  });

  $('.back-end-skill-section').mouseout(function() {
    $('.back-end-skill-icon').css('filter', 'none');
    $(this).css({'background-color': '#ced2de', 'transition': '0.5s'});
  });

  $('.development-skill-section').mouseover(function() {
    $('.development-skill-icon').css({'filter': 'drop-shadow(0 0 1px #4c4c4c)', 'transition': '0.5s'});
    $(this).css({'background-color': '#e5e8f7', 'transition': '0.5s'});
    $('.development-icons img').css({'filter': 'none', 'transition': '0.5s'});
  });

  $('.development-skill-section').mouseout(function() {
    $('.development-skill-icon').css('filter', 'none');
    $(this).css({'background-color': '#ced2de', 'transition': '0.5s'});
  });

  $('.authentication-skill-section').mouseover(function() {
    $('.authentication-skill-icon').css({'filter': 'drop-shadow(0 0 1px #4c4c4c)', 'transition': '0.5s'});
    $(this).css({'background-color': '#e5e8f7', 'transition': '0.5s'});
    $('.authentication-icons img').css({'filter': 'none', 'transition': '0.5s'});
  });

  $('.authentication-skill-section').mouseout(function() {
    $('.authentication-skill-icon').css('filter', 'none');
    $(this).css({'background-color': '#ced2de', 'transition': '0.5s'});
  });

  $('.architecture-skill-section').mouseover(function() {
    $('.architecture-skill-icon').css({'filter': 'drop-shadow(0 0 1px #4c4c4c)', 'transition': '0.5s'});
    $(this).css({'background-color': '#e5e8f7', 'transition': '0.5s'});
  });

  $('.architecture-skill-section').mouseout(function() {
    $('.architecture-skill-icon').css('filter', 'none');
    $(this).css({'background-color': '#ced2de', 'transition': '0.5s'});
  });

  $('.currently-learning-skill-section').mouseover(function() {
    $('.currently-learning-skill-icon').css({'filter': 'drop-shadow(0 0 1px #4c4c4c)', 'transition': '0.5s'});
    $(this).css('opacity', '1');
  });

  $('.currently-learning-skill-section').mouseout(function() {
    $('.currently-learning-skill-icon').css('filter', 'none');
    $(this).css('opacity', '.85');
  });

  /* Skill Section list items mouseover */

  $('.skill-list li').mouseover(function() {
    $(this).css({'box-shadow': '2px 2px 10px dimGrey', 'transition': '0.25s'});
  });

  $('.skill-list li').mouseout(function() {
    $(this).css({'box-shadow': 'none', 'transition': '0.25s'});
  });

  /* About Section mouseover */

  $('.about-section').mouseover(function() {
    $(this).children('.about-title').css({'letter-spacing': '1px', 'transition': '0.5s'});
    $(this).css({'box-shadow': 'inset 0 0 25px silver','transition': '0.5s'});
  });

  $('.about-section').mouseout(function() {
    $(this).children('.about-title').css('letter-spacing', '0');
    $(this).css({'box-shadow': 'inset 0 0 10px silver', 'transition': '0.5s'});
  });

  /* Footer container opacity appears on scroll */

  $(window).scroll(function() {
    if ((($(window).scrollTop() + $(window).height()) - 100) >= $('footer').offset().top) {
      $('.footer-container').css({'opacity': '1', 'transition': '2s'});
    }
  });
}

/* Main Nav Name clicks to reload window */

$('.nav-main-name').click(function() {
  $(document).ready(function() {
    $(this).scrollTop(0);
    window.location.reload();
  });
});

/* Scroll up arrow functionality */

$('.scroll-up-arrow').click(function() {
  if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
    window.scroll({top: 0, behavior: 'smooth'})
  } else {
    $('html').animate({
      scrollTop: '0px'
      }, 1200);
  }
});
