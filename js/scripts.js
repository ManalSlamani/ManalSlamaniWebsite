// scripts.js

// Dynamically load articles
const articles = [
    {
        title: "My First Article",
        date: "2025-01-01",
        preview: "This is a preview of my first article.",
        link: "#"
    },
    {
        title: "Another Weekly Update",
        date: "2025-01-08",
        preview: "Here's what I worked on this week.",
        link: "#"
    }
];

const articlesList = document.getElementById("articles-list");

if (articlesList) {
    articles.forEach(article => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("article-card");

        articleCard.innerHTML = `
            <h3>${article.title}</h3>
            <p><small>${article.date}</small></p>
            <p>${article.preview}</p>
            <a href="${article.link}" target="_blank">Read More</a>
        `;

        articlesList.appendChild(articleCard);
    });
}

// Form submission handler
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Thank you for reaching out, " + name + "! I'll get back to you soon.");
            contactForm.reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
}
