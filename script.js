// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form submission alert
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    form.reset();
  });
});

// Hero button action
document.querySelector(".cta").addEventListener("click", () => {
  alert("Resume download is currently unavailable.");
});

