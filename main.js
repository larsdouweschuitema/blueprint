document.addEventListener("DOMContentLoaded", function () {
  // Slider functionality
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  let currentSlide = 1;

  function changeSlide(slideNumber) {
    const controlLinks = document.querySelectorAll(".control-link");
    controlLinks.forEach((link) => link.classList.remove("active"));

    const selectedLink = document.querySelector(
      `.slider-controls a:nth-child(${slideNumber})`
    );
    selectedLink.classList.add("active");

    const targetSlide = document.getElementById(`slide-${slideNumber}`);
    slides.scrollLeft = targetSlide.offsetLeft;
  }

  function startAutoplay() {
    setInterval(() => {
      currentSlide = (currentSlide % totalSlides) + 1;
      changeSlide(currentSlide);
    }, 5000); // Adjust autoplay interval as needed
  }

  startAutoplay();

  // Back-to-top button functionality
  var backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var threshold = window.innerHeight;

    if (scrollPosition > threshold) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });
});

function changeSlide(slideNumber) {
  const controlLinks = document.querySelectorAll(".control-link");
  controlLinks.forEach((link) => link.classList.remove("active"));

  const selectedLink = document.querySelector(
    `.slider-controls a:nth-child(${slideNumber})`
  );
  selectedLink.classList.add("active");

  const slides = document.querySelector(".slides");
  const targetSlide = document.getElementById(`slide-${slideNumber}`);
  slides.scrollLeft = targetSlide.offsetLeft;
}
