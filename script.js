const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".nav-link");
const topButton = document.querySelector(".back-top");

/*
  Setiap menu sekarang adalah FILE HTML TERPISAH.
  Karena itu script tidak boleh mencegat klik navbar dan mencoba
  mencari section dengan ID di halaman yang sama.
*/

/* Mobile menu */
if (menuButton && navbar) {
  menuButton.setAttribute("aria-expanded", "false");

  menuButton.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");

    menuButton.textContent = isOpen ? "×" : "☰";
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

/* Tutup menu mobile setelah link dipilih.
   Navigasi tetap dilakukan oleh href HTML secara normal. */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!navbar || !menuButton) return;

    navbar.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
  });
});

/* Back to top */
function updateTopButton() {
  if (topButton) {
    topButton.classList.toggle("show", window.scrollY > 400);
  }
}

window.addEventListener("scroll", updateTopButton, { passive: true });
updateTopButton();

if (topButton) {
  topButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
