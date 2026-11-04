// Ahmed Iftikhar portfolio interactions
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#mainNav");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navCollapse = document.querySelector("#navLinks");

  const updateNav = () => nav.classList.toggle("scrolled", window.scrollY > 24);
  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  // Smooth-scroll to each section and close the mobile menu after selection.
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (navCollapse.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  // Keep the footer year current.
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Tiny pointer parallax for the decorative hero art (disabled on touch devices).
  const art = document.querySelector(".hero-art");
  if (art && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    art.addEventListener("mousemove", (event) => {
      const bounds = art.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      const windowCard = art.querySelector(".code-window");
      if (windowCard) windowCard.style.transform = `rotate(${2 + x * 3}deg) translate(${x * 8}px, ${y * 7}px)`;
    });
    art.addEventListener("mouseleave", () => {
      const windowCard = art.querySelector(".code-window");
      if (windowCard) windowCard.style.transform = "rotate(2deg)";
    });
  }
});
