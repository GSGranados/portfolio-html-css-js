$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });
  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });
  $('nav a[href*="#"]').on("click", function () {
    $("html, body").animate(
      (keyframes = {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      }),
      (options = 1500)
    );
  });
  $("#up").on("click", function () {
    $("html, body").animate(
        (keyframes = {
          scrollTop: 0        }),
        (options = 1500)
      );
  });

  AOS.init({
      easing: 'ease',
      duration: 1500,
      once: true
  });

});
