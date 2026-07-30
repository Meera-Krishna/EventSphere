// ================================
// LOAD SELECTED EVENT
// ================================

const event = JSON.parse(localStorage.getItem("selectedEvent"));

if (event) {

    document.getElementById("eventImage").src = event.image;
    document.getElementById("eventName").innerText = event.eventName;
    document.getElementById("eventLocation").innerText = event.location;
    document.getElementById("eventDate").innerText = event.date;
    document.getElementById("eventCategory").innerText = event.category;
    document.getElementById("eventPrice").innerText = event.price;

}

// ================================
// BOOKING FORM
// ================================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    const customerName = document.getElementById("customerName").value.trim();
    const customerEmail = document.getElementById("customerEmail").value.trim();
    const customerPhone = document.getElementById("customerPhone").value.trim();
    const tickets = document.getElementById("tickets").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(customerName.length < 3){

        alert("Please enter a valid name.");

        return;

    }

    if(!emailPattern.test(customerEmail)){

        alert("Please enter a valid email address.");

        return;

    }

    if(!/^[0-9]{10}$/.test(customerPhone)){

        alert("Phone number must contain exactly 10 digits.");

        return;

    }

    if(tickets < 1){

        alert("Select at least one ticket.");

        return;

    }

    const booking = {

        customerName,
        customerEmail,
        customerPhone,
        tickets,

        eventName: event.eventName,
        category: event.category,
        location: event.location,
        date: event.date,
        price: event.price,
        image: event.image,

        bookingDate: new Date().toLocaleDateString()

    };

    let bookingHistory = JSON.parse(localStorage.getItem("bookingHistory")) || [];

    bookingHistory.push(booking);

    localStorage.setItem("bookingHistory", JSON.stringify(bookingHistory));

    alert("🎉 Booking Confirmed Successfully!");

    window.location.href = "history.html";

});

console.log("Booking Page Loaded");