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
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $(".mobile-menu").click(function () {
    $(".mobile-menu span").toggleClass("active");
    $(".menu").toggleClass("active");
    $("body").toggleClass("overlay");
  });
});
