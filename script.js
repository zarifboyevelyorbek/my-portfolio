// ===========================
// DARK MODE TOGGLE
// ===========================
const darkToggle = document.getElementById("dark-toggle");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Icon almashtirish
    if (document.body.classList.contains("dark")) {
      darkToggle.textContent = "☀️";
    } else {
      darkToggle.textContent = "🌙";
    }

    // LocalStorage saqlash
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
  });

  // Reload bo‘lganda dark mode tiklash
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    darkToggle.textContent = "☀️";
  }
}

// ===========================
// MOBILE BURGER MENU
// ===========================
const burgerBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// ===========================
// SCROLL ANIMATIONS (FADE IN)
// ===========================
const faders = document.querySelectorAll(".fade");

const showOnScroll = () => {
  faders.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
showOnScroll();
