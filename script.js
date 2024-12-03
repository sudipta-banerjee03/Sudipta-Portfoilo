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

document.getElementById("seeMoreBtn").addEventListener("click", function () {
    var moreContent = document.getElementById("moreContent");
    var btn = document.getElementById("seeMoreBtn");


    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        btn.textContent = "See Less About Me";
    } else {
        moreContent.style.display = "none";
        btn.textContent = "See More About Me";
    }
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
