// ===============================
// PRELOADER
// ===============================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    },500);

});

// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");

const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click",()=>{

    navbar.classList.toggle("active");

});

// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

    });

});

// ===============================
// DARK MODE
// ===============================

const darkBtn=document.getElementById("darkModeBtn");

if(localStorage.getItem("theme")=="light"){

    document.body.classList.add("dark");

    darkBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","light");

        darkBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","dark");

        darkBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// STICKY HEADER EFFECT
// ===============================

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(8,17,32,.95)";

    }

    else{

        header.style.background="rgba(8,17,32,.75)";

    }

});
// =====================================
// ANIMATED COUNTERS
// =====================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const updateCounter = () => {

                if(count < target){

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }

                else{

                    counter.innerText = target.toLocaleString();

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(

".event-card,.category-card,.why-card,.testimonial-card,.stat-box,.newsletter-box"

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

revealElements.forEach(el=>{

    el.classList.add("fade");

    revealObserver.observe(el);

});

// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =====================================
// ACTIVE NAVBAR LINKS
// =====================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// =====================================
// NEWSLETTER FORM
// =====================================

const newsletterForm=document.querySelector(".newsletter form");

if(newsletterForm){

newsletterForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email=newsletterForm.querySelector("input");

    const value=email.value.trim();

    const pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(pattern.test(value)){

        alert("🎉 Thank you for subscribing!");

        newsletterForm.reset();

    }

    else{

        alert("Please enter a valid email address.");

    }

});

}

// =====================================
// BOOK NOW BUTTON
// =====================================

document.querySelectorAll(".btn-primary").forEach(button=>{

    if(button.textContent.includes("Book")){

        button.addEventListener("click",(e)=>{

            alert("Redirecting to Booking Page...");

        });

    }

});

// =====================================
// HERO PARALLAX
// =====================================

window.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth-e.pageX)/80;

    const y=(window.innerHeight-e.pageY)/80;

    document.querySelectorAll(".floating").forEach(circle=>{

        circle.style.transform=`translate(${x}px,${y}px)`;

    });

});

// =====================================
// CURRENT YEAR IN FOOTER
// =====================================

const copyright=document.querySelector(".copyright p");

if(copyright){

    copyright.innerHTML=`© ${new Date().getFullYear()} EventSphere. All Rights Reserved.`;

}

// =====================================
// PAGE LOADED
// =====================================

console.log("✅ EventSphere Loaded Successfully");