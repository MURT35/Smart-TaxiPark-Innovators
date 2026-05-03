// Render team dynamically from data.js
const teamContainer = document.getElementById("team-cards");

function renderTeam() {
  team.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("team-card");
    card.innerHTML = `
      <img src="${member.photo}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p><strong>${member.role}</strong></p>
      <p>${member.bio}</p>
      <p><em>${member.contribution}</em></p>
    `;
    teamContainer.appendChild(card);

    // Hover effect on team photos
    const img = card.querySelector("img");
    img.addEventListener("mouseover", () => {
      img.style.border = "3px solid #004466";
    });
    img.addEventListener("mouseout", () => {
      img.style.border = "none";
    });
  });
}

renderTeam();

// Smooth scroll navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Contact form validation + localStorage persistence
const form = document.querySelector("#contact form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let valid = true;
  let errorMsg = "";

  if (name === "") {
    valid = false;
    errorMsg += "Name cannot be empty. ";
  }
  if (!email.includes("@") || !email.includes(".")) {
    valid = false;
    errorMsg += "Email must contain @ and . ";
  }
  if (message.length < 10) {
    valid = false;
    errorMsg += "Message must be at least 10 characters. ";
  }

  if (valid) {
    // Save message into localStorage
    const newMessage = { name, email, message };
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(newMessage);
    localStorage.setItem("messages", JSON.stringify(messages));

    // Show confirmation
    alert("✅ Message sent successfully!");
    form.reset();
  } else {
    // Show error
    alert("❌ " + errorMsg);
  }
});
