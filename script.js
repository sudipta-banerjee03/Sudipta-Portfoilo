document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        hamburger.classList.toggle("active");
    });
});
// Get all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Listen for scroll events
window.addEventListener('scroll', () => {
    let currentSection = '';
    
    // Check which section is currently in view
    document.querySelectorAll('section').forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Highlight the active link
    navLinks.forEach((link) => {
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

const text = "Hi, I'm Sudipta Banerjee";
const typingEffect = document.getElementById("typing-effect");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingEffect.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else {

        setTimeout(() => {
            typingEffect.style.borderRight = "none";
        }, 500);
    }
}

window.onload = typeWriter;

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
});

document.addEventListener("DOMContentLoaded", () => {
    const seeMoreBtn = document.getElementById("seeMoreBtn");
    const moreContent = document.getElementById("moreContent");
    const hireMeBtn = document.getElementById("hireMeBtn");

    seeMoreBtn.addEventListener("click", () => {
        // Toggle visibility of the additional content
        if (moreContent.style.display === "block") {
            moreContent.style.display = "none";
            hireMeBtn.style.display = "none"; // Hide "Hire Me" button
            seeMoreBtn.textContent = "See More About Me"; // Update button text
        } else {
            moreContent.style.display = "block";
            hireMeBtn.style.display = "inline-block"; // Show "Hire Me" button
            seeMoreBtn.textContent = "See Less About Me"; // Update button text
        }
    });

    // Optional: Add functionality for the "Hire Me" button
    hireMeBtn.addEventListener("click", () => {
        alert("Thank you for your interest! Feel free to contact me via the Contact section below.");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill-item");

    skills.forEach(skill => {
        skill.addEventListener("click", function () {
            const description = this.getAttribute("data-description");
            alert(description);
        });
    });
});
