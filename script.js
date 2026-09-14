/* =========================================
   MS MEER WEBSITE JAVASCRIPT
   ========================================= */


/* ---------- MOBILE MENU ---------- */

const menuBtn = document.querySelector("#menuBtn");

const navMenu = document.querySelector("#navMenu");

if (menuBtn) {
menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Close menu after clicking a link */

 document.querySelectorAll("#navMenu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});



/* =========================================
   ORDER FORM
   ========================================= */

const orderForm = document.getElementById("orderForm");


orderForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const business =
        document.getElementById("business").value.trim();

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value.trim();


    /* Check fields */

    if (
        name === "" ||
        phone === "" ||
        business === "" ||
        service === "" ||
        message === ""
    ) {

        alert(
            "Please fill all required fields."
        );

        return;

    }


    /* Success message */

    alert(
        "Thank you, " + name +
        "!\n\n" +

        "Your order has been received.\n\n" +

        "Service: " + service +
        "\nBusiness: " + business +

        "\n\nMS MEER will contact you on:\n" +
        phone
    );


    /* Reset form */

    orderForm.reset();

});



/* =========================================
   CURRENT YEAR
   ========================================= */

const yearElement =
    document.getElementById("year");


yearElement.textContent =
    new Date().getFullYear();



/* =========================================
   BACK TO TOP BUTTON
   ========================================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navMenu = document.getElementById("navMenu");
const menuOverlay = document.getElementById("menuOverlay");

// Open menu
menuBtn.addEventListener("click", function () {
    navMenu.classList.add("active");
    menuOverlay.classList.add("active");
});

// Close menu
closeBtn.addEventListener("click", function () {
    navMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});

// Close when clicking outside
menuOverlay.addEventListener("click", function () {
    navMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
    });
});
   // Stars clickable fix
const stars = document.querySelectorAll('.star');
let currentRating = 0;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    currentRating = index + 1;
    stars.forEach(s => s.classList.remove('active'));
    for(let i=0; i<currentRating; i++){
      stars[i].classList.add('active');
    }
    console.log("Rating:", currentRating);
  });
});
// Rating Stars Clickable
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".rating span, #starRating span,.stars span,.star-rating span");
  let rating = 0;
  stars.forEach((star, idx) => {
    star.addEventListener("click", () => {
      rating = idx + 1;
      stars.forEach(s => s.classList.remove("active"));
      for(let i=0; i<=idx; i++){
        stars[i].classList.add("active");
      }
      console.log("Selected rating:", rating);
      const input = document.querySelector("#ratingValue, #rating-input, input[name='rating']");
      if(input) input.value = rating;
    });
  });
});
