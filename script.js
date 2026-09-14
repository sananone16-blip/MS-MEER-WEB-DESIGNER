/* =========================================
   MS MEER WEBSITE JAVASCRIPT - FINAL FIXED
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- MOBILE MENU ---------- */
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

  if (menuOverlay && navMenu) {
    menuOverlay.addEventListener("click", function () {
      navMenu.classList.remove("active");
      menuOverlay.classList.remove("active");
    });
  }

  // Close menu after clicking a link
  const navLinks = document.querySelectorAll("#navMenu a, .nav-menu a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navMenu) navMenu.classList.remove("active");
      if (menuOverlay) menuOverlay.classList.remove("active");
    });
  });

  /* ---------- STARS RATING - CLICKABLE ---------- */
// ---------- STARS RATING - MOBILE + DESKTOP FIX ----------
  const stars = document.querySelectorAll("#starRating.star");
  const ratingInput = document.getElementById("ratingValue");

  function setRating(val){
    if(ratingInput) ratingInput.value = val;
    stars.forEach(s => s.classList.remove("active"));
    for(let i=0; i<val; i++){
      if(stars[i]) stars[i].classList.add("active");
    }
  }

  if (stars.length > 0) {
    stars.forEach((star, index) => {
      const val = parseInt(star.getAttribute("data-value")) || (index+1);

      // Desktop click
      star.addEventListener("click", () => setRating(val));

      // Mobile touch - bahut zaruri hai
      star.addEventListener("touchstart", (e) => {
        e.preventDefault();
        setRating(val);
      }, {passive: false});
    });
  }
  /* ---------- ORDER FORM ---------- */
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name")?.value.trim() || "";
      const phone = document.getElementById("phone")?.value.trim() || "";
      const business = document.getElementById("business")?.value.trim() || "";
      const service = document.getElementById("service")?.value || "";
      const message = document.getElementById("message")?.value.trim() || "";

      if (name === "" || phone === "" || business === "" || service === "" || message === "") {
        alert("Please fill all required fields.");
        return;
      }

      alert("Thank you, " + name + "!\n\nYour order has been received.\n\nService: " + service + "\nBusiness: " + business + "\n\nMS MEER will contact you on:\n" + phone);
      orderForm.reset();
    });
  }

  /* ---------- FEEDBACK FORM ---------- */
  const feedbackForm = document.getElementById("feedbackForm");
  const feedbackMessage = document.getElementById("feedbackMessage");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function(e){
      e.preventDefault();
      const rating = ratingInput ? ratingInput.value : "0";
      if(rating === "0" || rating === ""){
        alert("Please select a star rating first!");
        return;
      }
      if(feedbackMessage){
        feedbackMessage.textContent = "Thank you! Your " + rating + " stars feedback received.";
        feedbackMessage.style.color = "green";
      }
      feedbackForm.reset();
      stars.forEach(s => s.classList.remove("active"));
      if(ratingInput) ratingInput.value = "0";
    });
  }

  /* ---------- CURRENT YEAR ---------- */
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* ---------- BACK TO TOP BUTTON ---------- */
  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        topBtn.classList.add("show");
      } else {
        topBtn.classList.remove("show");
      }
    });

    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});
