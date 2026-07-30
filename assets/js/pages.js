// ================================
// EVENT SEARCH
// ================================

const searchInput = document.getElementById("searchInput");
const eventCards = document.querySelectorAll(".event-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    eventCards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        const category = card.dataset.category.toLowerCase();

        if (title.includes(value) || category.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// ================================
// CATEGORY FILTER
// ================================

const filterButtons = document.querySelectorAll(".filter");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.dataset.category;

        eventCards.forEach(card => {

            if (category === "all") {

                card.style.display = "block";

            }

            else if (card.dataset.category === category) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});

// ================================
// BOOK EVENT
// ================================

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".event-card");

        const eventName = card.querySelector("h3").innerText;

        const category = card.querySelector(".category").innerText;

        const location = card.querySelector(".event-details span:first-child").innerText;

        const date = card.querySelector(".event-details span:last-child").innerText;

        const price = card.querySelector(".price-rating h4").innerText;

        const image = card.querySelector("img").src;

        const booking = {

            eventName,

            category,

            location,

            date,

            price,

            image

        };

        localStorage.setItem("selectedEvent", JSON.stringify(booking));

        window.location.href = "booking.html";

    });

});

// ================================
// FAVORITE EVENTS
// ================================

eventCards.forEach(card => {

    const heart = document.createElement("button");

    heart.innerHTML = "🤍";

    heart.className = "favorite-btn";

    card.appendChild(heart);

    heart.addEventListener("click", () => {

        heart.classList.toggle("active");

        heart.innerHTML = heart.classList.contains("active") ? "❤️" : "🤍";

    });

});

console.log("Events Page Loaded");