// source : https://www.youtube.com/watch?v=gBzsE0oieio
const track = document.querySelector(".slide-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".slide-right");
const prevButton = document.querySelector(".slide-left");
const dotNav = document.querySelector(".carouselNav");
const dots = Array.from(dotNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("slideCurrent");
  targetSlide.classList.add("slideCurrent");
};
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("slideCurrent");
  targetDot.classList.add("slideCurrent");
};
const updateArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("isHidden");
    nextButton.classList.remove("isHidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("isHidden");
    nextButton.classList.add("isHidden");
  } else {
    prevButton.classList.remove("isHidden");
    nextButton.classList.remove("isHidden");
  }
};

dotNav.addEventListener("click", e => {
  const targetDot = e.target.closest("i");
  if (!targetDot) return;
  let currentSlide = track.querySelector(".slideCurrent");
  let currentDot = dotNav.querySelector(".slideCurrent");
  let targetIndex = dots.findIndex(e => e === targetDot);
  let targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  updateArrows(slides, prevButton, nextButton, targetIndex);
});

nextButton.addEventListener("click", e => {
  let currentSlide = track.querySelector(".slideCurrent");
  let nextSlide = currentSlide.nextElementSibling;
  let currentDot = dotNav.querySelector(".slideCurrent");
  let nextDot = currentDot.nextElementSibling;
  let targetIndex = slides.findIndex(slide => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  updateArrows(slides, prevButton, nextButton, targetIndex);
});

prevButton.addEventListener("click", e => {
  let currentSlide = track.querySelector(".slideCurrent");
  let prevSlide = currentSlide.previousElementSibling;
  let currentDot = dotNav.querySelector(".slideCurrent");
  let prevDot = currentDot.previousElementSibling;
  let targetIndex = slides.findIndex(slide => slide === prevSlide);
  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  updateArrows(slides, prevButton, nextButton, targetIndex);
});
