// Show the button when the user scrolls down 100px from the top
window.onscroll = function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };
  
  // Scroll to the top when the button is clicked
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  }
  