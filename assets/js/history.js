const bookingContainer = document.getElementById("bookingContainer");

let bookings = JSON.parse(localStorage.getItem("bookingHistory")) || [];

if(bookings.length===0){

bookingContainer.innerHTML=`

<div class="empty">

No Bookings Yet 🎟️

</div>

`;

}

else{

displayBookings();

}

function displayBookings(){

bookingContainer.innerHTML="";

bookings.forEach((booking,index)=>{

bookingContainer.innerHTML+=`

<div class="booking-card">

<img src="${booking.image}">

<div class="booking-content">

<h2>${booking.eventName}</h2>

<p><strong>Name:</strong> ${booking.customerName}</p>

<p><strong>Email:</strong> ${booking.customerEmail}</p>

<p><strong>Location:</strong> ${booking.location}</p>

<p><strong>Date:</strong> ${booking.date}</p>

<p><strong>Tickets:</strong> ${booking.tickets}</p>

<p><strong>Price:</strong> ${booking.price}</p>

<p><strong>Booked On:</strong> ${booking.bookingDate}</p>

<button
class="delete-btn"
onclick="deleteBooking(${index})">

Delete Booking

</button>

</div>

</div>

`;

});

}

function deleteBooking(index){

bookings.splice(index,1);

localStorage.setItem("bookingHistory",JSON.stringify(bookings));

location.reload();

}

console.log("History Page Loaded");