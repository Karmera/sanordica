// =========================================================
// SANORDICA — MAIN JS
// =========================================================


// Current year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// ---------------------------------------------------------
// Smooth anchor scrolling
// ---------------------------------------------------------

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

  anchor.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  });

});


// ---------------------------------------------------------
// Header shadow after scrolling
// ---------------------------------------------------------

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});
