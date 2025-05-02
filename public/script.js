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



// Faqs 
document.addEventListener('DOMContentLoaded', () => {
  const togglers = document.querySelectorAll('[data-toggle]');

  togglers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const selector = e.currentTarget.dataset.toggle
      const block = document.querySelector(`${selector}`);
      if (e.currentTarget.classList.contains('active')) {
        block.style.maxHeight = '';
      } else {
        block.style.maxHeight = block.scrollHeight + 'px';
      }

      e.currentTarget.classList.toggle('active')
    })
  })
})

document.addEventListener('DOMContentLoaded', function() {
  const textTransition = document.querySelector('.text-transition');
  const words = ['tutor', 'mentor', 'advisor']; 
  const colors = ['#EE744C', '#3D906F', '#EBC273']; 
  let currentWordIndex = 0;

  function updateWord() {
    const word = words[currentWordIndex];
    const color = colors[currentWordIndex];
    textTransition.innerHTML = `<span style="color: ${color}">${word}</span>`; // ✅ corrected here
    currentWordIndex = (currentWordIndex + 1) % words.length;
  }

  updateWord(); 

  setInterval(() => {
    textTransition.classList.remove('animate');
    setTimeout(() => {
      updateWord();
      textTransition.classList.add('animate');
    }, 90);
  }, 3000);
});




