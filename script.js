document.addEventListener("DOMContentLoaded", () => {
  initAOS();
  initMobileMenu();
  initCookieBanner();
});

/* ========== AOS Scroll Animationen ========== */
function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  } else {
    console.warn("⚠️ AOS (Animate On Scroll) ist nicht geladen.");
  }
}

/* ========== Hamburger-Menü für Mobilgeräte ========== */
function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    const isActive = navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isActive);
  });

  // Escape-Taste schließt Menü
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ========== Cookie-Banner Verwaltung ========== */
function initCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies"); // optional

  if (!banner || !acceptBtn) return;

  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  if (!cookiesAccepted) {
    banner.style.display = "block";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.style.display = "none";
  });

  if (rejectBtn) {
    rejectBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "false");
      banner.style.display = "none";
    });
  }
}
