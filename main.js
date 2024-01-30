document.addEventListener("DOMContentLoaded", function () {
  // Slider functionality
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  let currentSlide = 1;

  function changeSlide(slideNumber) {
    const controlLinks = document.querySelectorAll(".control-link");
    const selectedLink = document.querySelector(
      `.slider-controls a:nth-child(${slideNumber})`
    );

    if (!selectedLink.classList.contains("active")) {
      // Remove active class from all control links
      controlLinks.forEach((link) => link.classList.remove("active"));

      // Add active class to the clicked control link
      selectedLink.classList.add("active");

      // Update the active slide (optional: scroll to the corresponding slide)
      const slides = document.querySelector(".slides");
      const targetSlide = document.getElementById(`slide-${slideNumber}`);
      const screenWidth = window.innerWidth;
      const scrollAmount =
        screenWidth > 768 ? targetSlide.offsetWidth : screenWidth;

      slides.scrollLeft = targetSlide.offsetLeft - scrollAmount / 2;
    }
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

  backToTopBtn.addEventListener("click", function (event) {
    if (typeof event.preventDefault === "function") {
      event.preventDefault();
    }
    scrollToTop();
  });

  function scrollToTop() {
    const startPosition = window.scrollY;
    const targetPosition = 0;
    const distance = targetPosition - startPosition;
    const duration = 500; // Adjust the duration as needed
    let startTime;

    function animation(currentTime) {
      if (startTime === undefined) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const easeInOutCubic = easeInOutCubicFunction(
        elapsedTime,
        startPosition,
        distance,
        duration
      );
      window.scrollTo(0, easeInOutCubic);

      if (elapsedTime < duration) {
        requestAnimationFrame(animation);
      }
    }

    function easeInOutCubicFunction(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
  }
});

function changeSlide(slideNumber) {
  const controlLinks = document.querySelectorAll(".control-link");
  const selectedLink = document.querySelector(
    `.slider-controls a:nth-child(${slideNumber})`
  );

  if (!selectedLink.classList.contains("active")) {
    // Remove active class from all control links
    controlLinks.forEach((link) => link.classList.remove("active"));

    // Add active class to the clicked control link
    selectedLink.classList.add("active");

    // Update the active slide (optional: scroll to the corresponding slide)
    const slides = document.querySelector(".slides");
    const targetSlide = document.getElementById(`slide-${slideNumber}`);
    const screenWidth = window.innerWidth;
    const scrollAmount =
      screenWidth > 768 ? targetSlide.offsetWidth : screenWidth;

    slides.scrollLeft = targetSlide.offsetLeft - scrollAmount / 2;
  }
}
