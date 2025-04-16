// First Slider
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      loop: true,
      margin: 50,
      responsiveClass: true,
      nav: false, 
      dots: true, 
      stagePadding: 100,
      responsive: {
        0: {
          items: 1
        },
        568: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    });
  });

  // Second Slider
  var owl = $('.second-slider');
  owl.owlCarousel({
    items: 3, 
    loop: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 1000, 
    autoplayHoverPause: true,
    smartSpeed: 500, 
    autoplaySpeed: 5000, 
    slideTransition: 'linear' ,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      800: {
        items: 1,
        margin: 5,
      },
      1000: {
        items: 2,
      },
      1400: {
        items: 3
      }
    } 
  });

  // third Slider
  var owl = $('.third-slider');
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 1000, 
    autoplayHoverPause: true,
    smartSpeed: 100, 
    autoplaySpeed: 5000, 
    slideTransition: 'linear',  
    rtl: true,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      800: {
        items: 1,
        margin: 5,
      },
      1000: {
        items: 2,
      },
      1400: {
        items: 3
      }
    } 
  });

  

  
  