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

    const slides = document.querySelector(".slides");
    const targetSlide = document.getElementById(`slide-${slideNumber}`);

    // Adjust the scroll amount based on screen width
    const screenWidth = window.innerWidth;
    const scrollAmount =
      screenWidth > 768 ? targetSlide.offsetWidth : screenWidth;

    slides.scrollLeft = targetSlide.offsetLeft - scrollAmount / 2;
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

  // Adjust the scroll amount based on screen width
  const screenWidth = window.innerWidth;
  const scrollAmount =
    screenWidth > 768 ? targetSlide.offsetWidth : screenWidth;

  slides.scrollLeft = targetSlide.offsetLeft - scrollAmount / 2;
}
