document.addEventListener("DOMContentLoaded", function () {
  var backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    // Adjust this threshold based on your design
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
