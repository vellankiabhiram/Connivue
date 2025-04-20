// Mobile menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Placeholder functionality for progress bar
const progressFilled = document.querySelector('.progress-filled');
let progress = 0;

setInterval(() => {
  if (progress < 100) {
    progress += 1;
    progressFilled.style.width = `${progress}%`;
  }
}, 1000);
