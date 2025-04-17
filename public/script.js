// First Slider
$(document).ready(function () {
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
  slideTransition: 'linear',
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

const { ScrollObserver, valueAtPercentage } = aat

const cardsContainer = document.querySelector('.cards')
const cards = document.querySelectorAll('.card')
cardsContainer.style.setProperty('--cards-count', cards.length)
cardsContainer.style.setProperty(
  '--card-height',
  `${cards[0].clientHeight}px`
)
Array.from(cards).forEach((card, index) => {
  const offsetTop = 20 + index * 20
  card.style.paddingTop = `${offsetTop}px`
  if (index === cards.length - 1) {
    return
  }
  const toScale = 1 - (cards.length - 1 - index) * 0.1
  const nextCard = cards[index + 1]
  const cardInner = card.querySelector('.card__inner')
  ScrollObserver.Element(nextCard, {
    offsetTop,
    offsetBottom: window.innerHeight - card.clientHeight
  }).onScroll(({ percentageY }) => {
    cardInner.style.scale = valueAtPercentage({
      from: 1,
      to: toScale,
      percentage: percentageY
    })
    cardInner.style.filter = `brightness(${valueAtPercentage({
      from: 1,
      to: 0.6,
      percentage: percentageY
    })})`
  })
})




