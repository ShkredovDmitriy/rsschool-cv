function mobileMenuToggle() {
  $('.button-mobile-menu').toggleClass('active');
  $('.nav').toggleClass('active');
}

$('.button-mobile-menu').on('click', mobileMenuToggle);
$('.nav__link').on('click', mobileMenuToggle);
