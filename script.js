/* MS MEER FINAL FIXED */
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const navMenu = document.getElementById("navMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
      navMenu.classList.add("active");
      if (menuOverlay) menuOverlay.classList.add("active");
    });
  }
  if (closeBtn && navMenu) {
    closeBtn.addEventListener("click", function () {
      navMenu.classList.remove("active");
      if (menuOverlay) menuOverlay.classList.remove("active");
    });
  }

  // Stars - FINAL
  const stars = document.querySelectorAll("#starRating.star");
  const ratingInput = document.getElementById("ratingValue");

  stars.forEach((star, index) => {
    star.style.cursor = "pointer";
    star.addEventListener("click", () => {
      const val = parseInt(star.getAttribute("data-value")) || (index + 1);
      if (ratingInput) ratingInput.value = val;
      stars.forEach(s => s.classList.remove("active"));
      for (let i = 0; i < val; i++) stars[i].classList.add("active");
    });
  });

  // Year, Top Btn, Forms...
  const yearElement = document.getElementById("year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();
});
