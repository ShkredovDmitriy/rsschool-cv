function scrollTo(event) {
  event.preventDefault();
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#' + event.target.href.split('#')[1]).offset().top,
    },
    500
  );
}

$('.nav__link').on('click', scrollTo);
$('.top-link').on('click', scrollTo);

$(window).on('scroll', (event) => {
  if ($(event.target).scrollTop() > 500) $('.top-link').show();
  else $('.top-link').hide();
});
