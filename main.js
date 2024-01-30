document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const drawer = document.querySelector(".drawer");

  // Function to open the menu
  function openMenu() {
    body.classList.add("menu-open");
    // You might want to add additional logic or styles specific to when the menu is open
  }

  // Function to close the menu
  function closeMenu() {
    body.classList.remove("menu-open");
    // You might want to add additional logic or styles specific to when the menu is closed
  }

  // Example: Add click event to a menu toggle button
  const menuToggleButton = document.getElementById("hamburger-toggle");

  menuToggleButton.addEventListener("click", function () {
    if (body.classList.contains("menu-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

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
  backToTopBtn.classList.add("hide");

  backToTopBtn.addEventListener("click", function (event) {
    if (typeof event.preventDefault === "function") {
      event.preventDefault();
    }
    scrollToTop();
    backToTopBtn.classList.remove("show"); // Ensure show class is removed immediately
  });

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var threshold = window.innerHeight;

    if (scrollPosition < threshold) {
      backToTopBtn.classList.add("hide");
    } else {
      backToTopBtn.classList.remove("hide");
    }
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
