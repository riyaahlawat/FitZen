const testimonialsContainer = document.querySelector('.testimonials-container');

let scrollAmount = 0;
const scrollStep = 300; // Change this if the card width changes

setInterval(() => {
  scrollAmount += scrollStep;
  if (scrollAmount >= testimonialsContainer.scrollWidth) {
    scrollAmount = 0;
  }
  testimonialsContainer.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}, 3000); // Change interval as needed
