

// Hamburger-Menü-Logik
const mobileOpenButton = document.getElementById("mobile-open-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const overlay = document.getElementById("overlay");

mobileOpenButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

// Overlay schließen, wenn es angeklickt wird
overlay.addEventListener("click", () => {
  dropdownMenu.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Menü und Overlay schließen beim Scrollen
window.addEventListener("scroll", () => {
  if (!dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});