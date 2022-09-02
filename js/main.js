$(function ($) {
  $(".bg-swicher").bgSwitcher({
    images: ["images/bg1.jpg", "images/bg2.jpg", "images/bg3.jpg"],
    interval: 5000,
    loop: true,
  });

  $(window).scroll(function () {
    var targetElement = $(".fadein").offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200) {
      $(".fadein").css("opacity", "1");
      $(".fadein").css("transform", "translateY(0)");
    }
  });
});
