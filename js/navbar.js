const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu");

mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("show");
});

closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
});