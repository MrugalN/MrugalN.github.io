// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Remove active class from all sections
            sections.forEach(section => section.classList.remove("active"));

            // Add active class to the clicked section
            const targetId = event.target.getAttribute("href").substring(1);
            document.getElementById(targetId).classList.add("active");
        });
    });

    // Optional: Automatically show the About section on page load
    document.getElementById("about").classList.add("active");
});

document.addEventListener("DOMContentLoaded", function() {
    // Add interactivity here

    // Smooth scrolling for navigation links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Alert on profile picture click
    const profilePic = document.querySelector(".profile-pic");
    profilePic.addEventListener("click", function() {
        alert("This is your profile picture!");
    });

    // Hover effect for project images
    const projectImages = document.querySelectorAll('.project-img');
    projectImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.opacity = "0.7";
            // You can add a description here if needed
        });
        image.addEventListener('mouseout', function() {
            this.style.opacity = "1";
        });
        image.addEventListener('click', function() {
            alert("This is a project image!");
        });
    });
});
