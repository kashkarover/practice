$(document).ready(function () {
  $(".sliders").slick({
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='btn-slick-prev btn btn-slider'><img src='images/arrow-left.svg' alt='prev'></button>",
    nextArrow:
      "<button type='button' class='btn-slick-next btn btn-slider'><img src='images/arrow-right.svg' alt='next'></button>",
  });

  $(".mobile-menu").click(function () {
    $(".mobile-menu span").toggleClass("active");
    $(".menu").toggleClass("active");
    $("body").toggleClass("overlay");
  });
});
