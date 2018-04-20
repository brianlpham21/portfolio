$('.nav-main-name').click(function(){
  $(document).ready(function(){
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
    $('.nav-main-name').css({'font-size': '20px', 'transition': '0.25s'});
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

let background_image_parallax = function($object, multiplier){
  multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
	multiplier = 1 - multiplier;
  let $doc = $(document);
  $object.css({"background-attatchment" : "fixed"});

	$(window).scroll(function(){
	  let from_top = $doc.scrollTop(),
	      bg_css = 'center ' +(multiplier * from_top - 120) + 'px';
	  $object.css({"background-position": bg_css });
  });
};

background_image_parallax($("header"));

$('.scroll-up-arrow').click(function(){
  $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top + 'px'
  }, 700);
});
