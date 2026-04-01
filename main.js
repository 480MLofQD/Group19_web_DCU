(function () {
  const menuHamburger = document.querySelector(".menu");
  const navLinks = document.querySelector(".list");
  if (!menuHamburger || !navLinks) return;

  menuHamburger.addEventListener("click", function () {
    navLinks.classList.toggle("mobile-menu");
  });
})();

