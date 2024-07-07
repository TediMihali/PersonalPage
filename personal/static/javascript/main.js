document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox_toggle');
    const leftItems = document.querySelector('.navbar .left-items');

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    function handleMediaChange(e) {
        if (e.matches) {
            leftItems.style.display = 'flex';

        } else {
            leftItems.style.display = checkbox.checked ? 'flex' : 'none';
        }
    }

    if (checkbox && leftItems) {
        handleMediaChange(mediaQuery);

        mediaQuery.addListener(handleMediaChange);

        checkbox.addEventListener('change', function() {
            if (!mediaQuery.matches) {
                leftItems.style.display = checkbox.checked ? 'flex' : 'none';
            }
        });
    }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}