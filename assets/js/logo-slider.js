$(document).ready(function () {
    $('.customer-logos').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: true,
      dots: false,
      pauseOnHover: false,
      prevArrow: '<i class="slick-prev fas fa-angle-left"></i>',
      nextArrow: '<i class="slick-next fas fa-angle-right"></i>',
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  });