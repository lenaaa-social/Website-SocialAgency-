

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

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
          observer.unobserve(entry.target); // Stoppe das Beobachten, um die Animation nur einmal abzuspielen
        }
      });
    },
    { threshold: 0.7 } // Schwellenwert für Auslösung
  );

  // Alle Elemente mit der Klasse "animated-content" auswählen
  const animatedElements = document.querySelectorAll(".animated-slide-in");
  animatedElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target); // Stoppe das Beobachten, um die Animation nur einmal abzuspielen
        }
      });
    },
    { threshold: 0.7 } // Schwellenwert für Auslösung
  );

  // Alle Elemente mit der Klasse "animated-content" auswählen
  const animatedElements = document.querySelectorAll(".animated-appear");
  animatedElements.forEach((el) => observer.observe(el));
});