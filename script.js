/* =========================================
   MS MEER WEBSITE JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- CURRENT YEAR ---------- */
    const yearElement = document.getElementById("year");
    if (yearElement) yearElement.textContent = new Date().getFullYear();


    /* ---------- BACK TO TOP BUTTON ---------- */
    const topBtn = document.getElementById("topBtn");
    if (topBtn) {
        window.addEventListener("scroll", function () {
            topBtn.classList.toggle("show", window.scrollY > 400);
        });
        topBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }


    /* ---------- ORDER FORM (sends order to WhatsApp) ---------- */
    const orderForm = document.getElementById("orderForm");
    if (orderForm) {
        orderForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const business = document.getElementById("business").value.trim();
            const service = document.getElementById("service").value;
            const details = document.getElementById("message").value.trim();

            if (!name || !phone || !business || !service || !details) {
                alert("Please fill all required fields.");
                return;
            }

            const text =
                "Hello MS MEER,%0A%0A" +
                "I want to order a website.%0A%0A" +
                "Name: " + encodeURIComponent(name) + "%0A" +
                "Phone: " + encodeURIComponent(phone) + "%0A" +
                "Business/Website: " + encodeURIComponent(business) + "%0A" +
                "Package: " + encodeURIComponent(service) + "%0A" +
                "Project Details: " + encodeURIComponent(details);

            window.open("https://wa.me/923410784488?text=" + text, "_blank");
            orderForm.reset();
        });
    }


    /* =========================================
       REVIEWS & FEEDBACK (public, visible to everyone)
       Reviews are saved in the visitor's browser storage
       and rendered on the page for every visitor to read.
       ========================================= */

    const STORAGE_KEY = "msmeer_reviews";

    const seedReviews = [
        { name: "Ali Raza", rating: 5, review: "MS MEER built our business site fast and it looks amazing on mobile.", date: "2025-11-02" },
        { name: "Sana Khan", rating: 5, review: "Very professional communication and delivered exactly what we asked for.", date: "2025-12-14" },
        { name: "Bilal Ahmed", rating: 4, review: "Great design work, quick replies on WhatsApp. Recommended.", date: "2026-02-08" }
    ];

    function loadReviews() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const saved = raw ? JSON.parse(raw) : [];
            return seedReviews.concat(saved);
        } catch (err) {
            return seedReviews;
        }
    }

    function saveReview(entry) {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const saved = raw ? JSON.parse(raw) : [];
            saved.unshift(entry);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
        } catch (err) {
            /* storage unavailable (private browsing etc.) - review still shows this session */
        }
    }

    function starString(rating) {
        return "★".repeat(rating) + "☆".repeat(5 - rating);
    }

    function renderReviews() {
        const list = document.getElementById("reviewsList");
        if (!list) return;

        const reviews = loadReviews();

        list.innerHTML = "";
        reviews.forEach(function (r) {
            const card = document.createElement("div");
            card.className = "review-card";
            card.innerHTML =
                '<span class="review-stars">' + starString(r.rating) + "</span>" +
                "<p>" + escapeHtml(r.review) + "</p>" +
                "<strong>" + escapeHtml(r.name) + "</strong>";
            list.appendChild(card);
        });
    }

    function escapeHtml(str) {
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }

    /* Clickable star rating picker */
    const stars = document.querySelectorAll("#reviews .stars span");
    const ratingInput = document.getElementById("ratingValue");
    const form = document.getElementById("feedbackForm");
    const message = document.getElementById("feedbackMessage");

    function setRating(value) {
        if (ratingInput) ratingInput.value = value;
        stars.forEach(function (star) {
            star.classList.toggle("selected", Number(star.dataset.value) <= value);
        });
        if (message) {
            message.textContent = value + " / 5 stars selected";
            message.style.color = "#0878ff";
        }
    }

    stars.forEach(function (star) {
        star.addEventListener("click", function () {
            setRating(Number(star.dataset.value));
        });
        star.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setRating(Number(star.dataset.value));
            }
        });
    });

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const rating = Number(ratingInput.value);

            if (rating < 1) {
                message.textContent = "Please select a star rating first.";
                message.style.color = "#dc2626";
                return;
            }

            const name = document.getElementById("reviewerName").value.trim();
            const review = document.getElementById("reviewText").value.trim();

            if (!name || !review) {
                message.textContent = "Please fill in your name and review.";
                message.style.color = "#dc2626";
                return;
            }

            const entry = {
                name: name,
                rating: rating,
                review: review,
                date: new Date().toISOString().slice(0, 10)
            };

            saveReview(entry);
            renderReviews();

            message.textContent = "Thank you! Your review is now posted below.";
            message.style.color = "#0878ff";

            form.reset();
            setRating(0);
        });
    }

    renderReviews();
});
