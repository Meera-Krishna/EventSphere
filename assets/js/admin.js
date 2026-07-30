if(localStorage.getItem("adminLoggedIn")!=="true"){

    alert("Please login first.");

    window.location.href="admin-login.html";

}
const form=document.getElementById("eventForm");

const list=document.getElementById("eventList");

let events=JSON.parse(localStorage.getItem("adminEvents"))||[];

const bookingHistory=JSON.parse(localStorage.getItem("bookingHistory"))||[];

document.getElementById("totalBookings").innerText=bookingHistory.length;

displayEvents();

form.addEventListener("submit",function(e){

e.preventDefault();

const event={

title:eventTitle.value,

category:eventCategory.value,

location:eventLocation.value,

date:eventDate.value,

price:eventPrice.value,

image:eventImage.value

};

events.push(event);

localStorage.setItem("adminEvents",JSON.stringify(events));

document.getElementById("totalEvents").innerText=12+events.length;

form.reset();

displayEvents();

});

function displayEvents(){

list.innerHTML="";

events.forEach((event,index)=>{

list.innerHTML+=`

<div class="admin-card">

<img src="${event.image}">

<h3>${event.title}</h3>

<p><strong>Category:</strong> ${event.category}</p>

<p><strong>Location:</strong> ${event.location}</p>

<p><strong>Date:</strong> ${event.date}</p>

<p><strong>Price:</strong> ${event.price}</p>

<button
class="delete"
onclick="deleteEvent(${index})">

Delete Event

</button>

</div>

`;

});

}

function deleteEvent(index){

events.splice(index,1);

localStorage.setItem("adminEvents",JSON.stringify(events));

document.getElementById("totalEvents").innerText=12+events.length;

displayEvents();

}

document.getElementById("totalEvents").innerText=12+events.length;

console.log("Admin Dashboard Loaded");

document.getElementById("logoutBtn").addEventListener("click",function(){

    localStorage.removeItem("adminLoggedIn");

    window.location.href="admin-login.html";

});